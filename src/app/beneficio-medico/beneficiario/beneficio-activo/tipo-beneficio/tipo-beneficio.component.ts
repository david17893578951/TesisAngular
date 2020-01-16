import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { configVariables } from "app/shared/variables.config";
import { CatalogoService, TipoBeneficioService } from "app/providers";
import { AlertasService } from "app/core/service";
import { TipoBeneficio } from "app/models/tipobeneficio.model";



@Component({
  selector: 'app-tipo-beneficio',
  templateUrl: './tipo-beneficio.component.html',
  //styleUrls: ['./tipo-beneficio.component.css']
})
export class TipoBeneficioComponent implements OnInit {
  @Input() codigo: number;
  public tipos: any;
  public tipobeneficio: any = {};
  public tipobeneficios: any;
  public showCatalago: boolean;
  public catalogos: any;
  public show: boolean;
  public repitr: boolean;
  @ViewChild('modal') modal: any;
  constructor(private httpTipoBeneficio: TipoBeneficioService, private httpCatalogo: CatalogoService, private alertaService: AlertasService) { }

  ngOnInit() {
    this.getTipoBeneficio(this.codigo)
    this.findAllCatalogo();
  }

  public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
      this.tipos = this.getItems(configVariables.APIVariable.TipoBeneficio.tipo);
      console.log( this.tipos);
      
      this.showCatalago = false;
    }
    )
  }
  public getItems(codigo: string) {
    return this.catalogos.filter(cat => cat.clavePadre === codigo)
  }

  public viewEstado(id) {
    let data = this.catalogos.find(acti => acti.id == id)
    if (data != null) {
      return data.nombre;
    }
  }

  public addOrUpdate(valid) {
    if (!valid) return;
    if (this.tipobeneficio.id != null && this.tipobeneficio.tipo != null) {

      this.httpTipoBeneficio.editTipoBeneficio(this.tipobeneficio).subscribe(autor => {
        this.modal.hide();
        this.getTipoBeneficio(this.codigo);
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();
      });

    } else {
      this.tipobeneficio.mdcBeneficio = { id: this.codigo }
     
      console.log(this.tipobeneficio);
      if (this.tipobeneficio.tipo != null) {
       this.httpTipoBeneficio.insertTipoBeneficio(this.tipobeneficio).subscribe(autor => {
            this.modal.hide();
            this.getTipoBeneficio(this.codigo);
            this.alertaService.mostrarAlertaInfoGeneric();
            this.limpiar();
          });
      }
    }
  }

  public setTipoBeneficioId(beneficio) {
    this.tipobeneficio = beneficio;
  }

  limpiar() {

    this.tipobeneficio = new TipoBeneficio();
    //this.tipos=[];
  }
  close() {
    this.modal.hide();
    this.getTipoBeneficio(this.codigo);

    this.limpiar();
  }

  public getTipoBeneficio(id) {
    if (id != null) {

      this.show = true;
      this.httpTipoBeneficio.getTipoBeneficiosPersona(id).subscribe(recibe => {
        this.tipobeneficios = recibe;
        

        this.show = false;
      });
    }
  }

  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: TipoBeneficio.getValidators()
    };
  }
}