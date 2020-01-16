import { Component, OnInit, ViewChild } from '@angular/core';
//import { Persona } from "app/beneficio-medico/models";

import { FadeInTop } from "../../shared/animations/fade-in-top.decorator";
import { Router } from "@angular/router";

import { configVariables } from "app/shared/variables.config";
import { PersonaService, CatalogoService, BeneficioService, TipoBeneficioService } from "app/providers";
import { AlertasService } from "app/core/service";

@Component({
  selector: 'app-beneficio-medico',
  templateUrl: './beneficio-medico.component.html',
 // styleUrls: ['./beneficio-medico.component.css']
})
export class BeneficioMedicoComponent implements OnInit {

  public persona: any = {};
  public personas: any;
  public cargarpersonas: boolean;
  public show: boolean;
  public beneficios: any;
  public beneficioactivo: any;
  public showCatalago: boolean;
  public showtipo: boolean;
  public showbeneficio: boolean;
  public catalogos: any;
  @ViewChild('modal') modal: any;
  public tipobeneficios: any;
  constructor(
    public alertService: AlertasService,
    public httpBeneficio: BeneficioService,
    public httpPersona: PersonaService,
    private router: Router,
    private httpTipoBeneficio: TipoBeneficioService,
    private httpCatalogo: CatalogoService
  ) {

  }

  ngOnInit() {
    // this.b = "/beneficiomedico/beneficiario/1";
    // this.getBeneficiarios();
    //this.personas = [];
    // this.persona = new Persona();
    //console.log(this.personas);
    //this.personas2 = [];
    //this.personas3 = [];
    this.getAllPersonas();
    this.findAllCatalogo();
  }

  public getTipoBeneficio(id) {
    if (id != null) {
      this.showtipo = true;
      this.httpTipoBeneficio.getTipoBeneficiosPersona(id).subscribe(recibe => {
        this.tipobeneficios = recibe;
        this.showtipo = false;
      });
    }
  }

  public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
      this.showCatalago = false;
    }
    )
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

  close() {
    this.modal.hide();
    this.getAllPersonas();
  //  this.tipobeneficios = new Array<TipoBeneficio>();
    //  this.limpiar();
  }
  public getActivos(codigo: string) {
    return this.beneficios.filter(cat => cat.estado === codigo);
  }

  public getAllPersonas() {
    this.cargarpersonas = true;
    this.httpPersona.getAllPersonas().subscribe(recibe => {
      this.personas = recibe
      this.cargarpersonas = false;
    });
  }
  public viewEstado(id) {
    let data = this.catalogos.find(acti => acti.id == id)
    if (data != null) {
      return data.nombre;
    }
  }


  /*public getBeneficiarios() {
    this.httpBeneficio.getBeneficiarios().subscribe(response => {
      this.beneficiarios = response
      console.log(this.beneficiarios);
    });
  }
*/


  public setBeneficioId(beneficio) {
    this.beneficios = beneficio;
  }

}
