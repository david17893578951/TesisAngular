import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DescuentoService } from "app/descuento/services";
import { configVariables } from "app/shared/variables.config";
import { CatalogoService } from "app/providers";
import { AlertasService } from "app/core/service";
import { Descuento } from "app/models";


@Component({
  selector: 'app-descuento-activo',
  templateUrl: './descuento-activo.component.html',
  // styleUrls: ['./descuento-activo.component.css']
})

export class DescuentoActivoComponent implements OnInit {
  @Input() codigo: number;
  public descuentoactivo: any;
  public descuentos: any;
  public descuento: any = {};
  public catalogos: any;
  public show: boolean;
  public submitt: boolean;
  public tipopaciente: any;
  public showCatalago: boolean;
  @ViewChild('modal') modal: any;

  constructor(private httpDescuento: DescuentoService, private httpCatalogo: CatalogoService, private alertaService: AlertasService) { }

  ngOnInit() {
    this.getDescuento(this.codigo);
    this.findAllCatalogo();
  }

  public addOrUpdate(valid) {

    if (!valid) return;
    if (this.descuento.id != null && this.descuento.tipo != null && this.descuento.descuento != null) {
      this.httpDescuento.editDescuento(this.descuento).subscribe(autor => {
        this.modal.hide();
        this.getDescuento(this.codigo);
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();

      });
    } else {
      this.descuento.estado = configVariables.APIVariable.Descuento.activo;
      this.descuento.fdiPersona = { id: this.codigo }
      this.descuento.fechaAsignacion = new Date();
      if (this.descuento.tipo != null && this.descuento.descuento != null) {
        this.httpDescuento.insertDescuento(this.descuento).subscribe(autor => {
          this.modal.hide();
          this.getDescuento(this.codigo);
          this.alertaService.mostrarAlertaInfoGeneric();
          this.limpiar();
        });

      }

    }

  }

  public setDescuentoId(descuento) {
    this.descuento = descuento;
  }

  public limpiar() {
    this.descuento = new Descuento();
  }

  public close() {
    this.modal.hide();
    this.getDescuento(this.codigo);
    this.limpiar();
  }

  public findAllCatalogo() {
    this.showCatalago = true;
    this.httpCatalogo.getAll().subscribe(recibe => {
      this.catalogos = recibe
      this.tipopaciente = this.getItems(configVariables.APIVariable.Descuento.tipopaciente);
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
  public getDescuento(id) {
    if (id != null) {
      this.show = true;
      this.httpDescuento.getDescuentoPersona(id).subscribe(recibe => {
        this.descuentos = recibe;
        this.descuentoactivo = this.getActivos(configVariables.APIVariable.Descuento.activo);
        this.show = false;
      });
    }
  }
  public getActivos(codigo: string) {
    return this.descuentos.filter(cat => cat.estado === codigo);
  }
  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Descuento.getValidators()
    };
  }
}
