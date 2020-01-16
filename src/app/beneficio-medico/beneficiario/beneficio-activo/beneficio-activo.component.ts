import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { configVariables } from "app/shared/variables.config";

import { Router } from "@angular/router";
import { CatalogoService, BeneficioService } from "app/providers";

import { Beneficio } from "app/models/beneficio.model";
import { AlertasService } from "app/core/service";



@Component({
  selector: 'app-beneficio-activo',
  templateUrl: './beneficio-activo.component.html',
  //styleUrls: ['./beneficio-activo.component.css']
})
export class BeneficioActivoComponent implements OnInit {
  @Input() codigo: number;

  public beneficio: any = {};
  public fechaasig: Date;
  public beneficios: any;
  public beneficioactivo: any;
  public catalogos: any;
  public show: boolean;
  public showCatalago: boolean;

  @ViewChild('modal') modal: any;

  constructor(private alertaService: AlertasService, private httpBeneficio: BeneficioService, private httpCatalogo: CatalogoService) { }

  ngOnInit() {
    //this.beneficio = new Beneficio();
    this.getBeneficio(this.codigo);
    this.findAllCatalogo();
  }



  public addOrUpdate(valid) {

    if (this.beneficio.id != null && this.beneficio.disposicion != null && this.beneficio.disposicion != '') {
      console.log(this.beneficio);
      this.httpBeneficio.editBeneficio(this.beneficio).subscribe(autor => {
        this.modal.hide();
        this.getBeneficio(this.codigo);
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();
      });
    } else {

      this.beneficio.estado = configVariables.APIVariable.Beneficio.activo;
      this.beneficio.fdiPersona = { id: this.codigo }
      this.beneficio.fechaAsignacion = new Date();
      if (this.beneficio.disposicion != null && this.beneficio.disposicion != '') {
        this.httpBeneficio.insertBeneficio(this.beneficio).subscribe(autor => {
          this.modal.hide();
          this.getBeneficio(this.codigo);
          this.alertaService.mostrarAlertaInfoGeneric();
          this.limpiar();
        });
      }
    }
  }

  public setBeneficioId(beneficio) {
    this.beneficio = beneficio;

  }

  limpiar() {
    this.beneficio = new Beneficio();

  }

  close() {
    this.modal.hide();
    this.getBeneficio(this.codigo);
    this.limpiar();
  }

  public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
      this.showCatalago = false;
    }
    )
  }

  public viewEstado(id) {
    let data = this.catalogos.find(acti => acti.id == id)
    if (data != null) {
      return data.nombre;
    }
  }


  public getBeneficio(id) {
    if (id != null) {
      this.show = true;
      this.httpBeneficio.getBeneficiosPersona(id).subscribe(recibe => {
        this.beneficios = recibe;
        this.beneficioactivo = this.getActivos(configVariables.APIVariable.Beneficio.activo);

        this.show = false;
      });
    }
  }
  public getActivos(codigo: string) {
    return this.beneficios.filter(cat => cat.estado === codigo);
  }

  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Beneficio.getValidators()
    };
  }


}
