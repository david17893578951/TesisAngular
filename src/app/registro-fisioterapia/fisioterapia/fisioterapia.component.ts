import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CatalogoService, RegistrofisioterapiaService } from "app/providers";
import { Registrofisioterapia } from "app/models";
import { AlertasService } from "app/core/service";

@Component({
  selector: 'app-fisioterapia',
  templateUrl: './fisioterapia.component.html',
  //styleUrls: ['./fisioterapia.component.css']
})
export class FisioterapiaComponent implements OnInit {
  public id: number;
  public seguimiento: any = {};
  public seguimientos: any;
  public catalogos: any;
  public showCatalago: boolean;
  @ViewChild('modal') modal: any;
  constructor(
    private httpCatalogo: CatalogoService,
    private alertaService: AlertasService,
    private router: Router,
    private routeurl: ActivatedRoute,
    public httpRegistrofisioterapiaService: RegistrofisioterapiaService
  ) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getSeguimientofisioterapiaByPersona(this.id);
//this.findAllCatalogo();

  }

  /*public addOrkUpdate(valid) {
      if (!valid) return;
      if (this.seguimiento.id != null) {
        this.actualizarDetalle("edit");
        
        
        this.limpiar();
      } else {
        this.seguimiento.estado = "22";
        this.seguimiento.fecha = new Date();
        
        this.actualizarDetalle("add");
      }
    }*/
  public addOrUpdate(valid) {
    if (!valid) return;
    if (this.seguimiento.id != null &&
      this.seguimiento.diagnosticoSug != null &&
      this.seguimiento.areaSug != null &&
      this.seguimiento.numsesionSug != null) {
      this.httpRegistrofisioterapiaService.editRegistrofisioterapia(this.seguimiento).subscribe(autor => {
        this.modal.hide();
        this.getSeguimientofisioterapiaByPersona(this.id);
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();
      });
    } else {
      this.seguimiento.estado = true;
      this.seguimiento.fecha = new Date();
      this.seguimiento.fdiPersona = { id: this.id }
      if (this.seguimiento.diagnosticoSug != null &&
        this.seguimiento.areaSug != null &&
        this.seguimiento.numsesionSug != null) {

        this.httpRegistrofisioterapiaService.insertRegistrofisioterapia(this.seguimiento).subscribe(autor => {
          this.modal.hide();
          this.getSeguimientofisioterapiaByPersona(this.id);
          this.alertaService.mostrarAlertaInfoGeneric();
          this.limpiar();
        });
      }
    }
  }



black() {
    this.router.navigate(['registrofisioterapia'])
  }

  public getSeguimientofisioterapiaByPersona(id) {
    this.httpRegistrofisioterapiaService.getSeguimientofisioterapiaByPersona(id).subscribe(recibese => {
      this.seguimientos = recibese;
    });
  }

  
  public setSeguimientoId(seguimiento) {
    this.seguimiento = seguimiento;
  }

  close() {
    this.modal.hide();
    this.getSeguimientofisioterapiaByPersona(this.id);
    this.limpiar();
  }

  limpiar() {
    this.seguimiento = new Registrofisioterapia();
  }

  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Registrofisioterapia.getValidators()
    };
  }

}
