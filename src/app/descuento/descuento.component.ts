import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { DescuentoService } from "app/descuento/services";
import { configVariables } from "app/shared/variables.config";
import { CatalogoService, PersonaService } from "app/providers";
import { AlertasService } from "app/core/service";
import { Descuento } from "app/models";

@Component({
  selector: 'app-descuento',
  templateUrl: './descuento.component.html',
  //styleUrls: ['./descuento.component.css']
})
export class DescuentoComponent implements OnInit {
  public persona: any = {};
  public personas: any;
  public descuentoactivo: any;
  public cargarpersonas: boolean;
  public show: boolean;
  public descuentos: any;
  public descuento: any = {};
  public catalogos: any;
  public showCatalago: boolean;
  @ViewChild('modal') modal: any;
  constructor(private httpDescuento: DescuentoService, private httpCatalogo: CatalogoService, private alertaService: AlertasService,
    public httpPersona: PersonaService,
    private router: Router) { }

  ngOnInit() {
    this.getAllPersonas();
    this.findAllCatalogo();
  }

   public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
     // this.tipopaciente = this.getItems(configVariables.APIVariable.Descuento.tipopaciente);
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

  public getDescuento(id) {
    if (id != null) {
      this.show = true;
      this.httpDescuento.getDescuentoPersona(id).subscribe(recibe => {
        this.descuentos = recibe;
        this.descuentoactivo = this.getActivos(configVariables.APIVariable.Descuento.activo);
         console.log(this.descuentoactivo);
        this.show = false;
      });
    }
  }
  
  public getActivos(codigo: string) {
    return this.descuentos.filter(cat => cat.estado === codigo);
  }

  limpiar() {
    this.descuento = new Descuento();
  }
  close() {

    this.modal.hide();
    this.getAllPersonas();
    this.limpiar();
  }

  public getAllPersonas() {
    this.cargarpersonas = true;
    this.httpPersona.getAllPersonas().subscribe(recibe => {
      this.personas = recibe
      this.cargarpersonas = false;
    });
  }

}
