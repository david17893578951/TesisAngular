import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertasService } from "app/core/service";
import { PersonaService, CatalogoService, SeguimientopsicologicoService, SesionService } from "app/providers";
import { Router, ActivatedRoute } from "@angular/router";
import { SeguimientoPsicologico, Sesion } from "app/models";
import { configVariables } from "app/shared/variables.config";

@Component({
  selector: 'app-control-psicologico',
  templateUrl: './control-psicologico.component.html',
  // styleUrls: ['./control-psicologico.component.css']
})
export class ControlPsicologicoComponent implements OnInit {
  @ViewChild('modal') modal: any;
  public id: number
  public porcentaje: number;
  public show: boolean;
  public show1: boolean;
  public showCatalago: boolean;
  public terapias: any;
  public terapiavigente: any;
  public catalogos: any;
  public sesiones: any;
  public asistencia: any;
  constructor(
    private routeurl: ActivatedRoute,
    private router: Router,
    private httpCatalogo: CatalogoService,
    private httpSesionService: SesionService,
    private httpSeguimientopsicologicoService: SeguimientopsicologicoService,
    private alertaService: AlertasService,
  ) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });
    this.terapiavigente = new SeguimientoPsicologico();
    this.asistencia = new Sesion();
    this.getTerapia(this.id);
    this.findAllCatalogo();
  }

  public addOrUpdate(valid) {
    if (!valid) return;
    console.log(this.asistencia);
    if (this.asistencia.id != null) {
      this.httpSesionService.editTerapia(this.asistencia).subscribe(autor => {
        this.modal.hide();
        this.getTerapia(this.id);
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();
      });
    } else {

      this.asistencia.fecha = new Date();
      this.asistencia.psgSeguimientoPsicologico = { id: this.terapiavigente.id }
      console.log(this.asistencia);
      if (this.asistencia.recomendacion != null && this.asistencia.conclusion != null) {


        var auto = this.sesiones.length + 1;
        this.asistencia.numsesionactual = auto;
        this.asistencia.porcentajeasistido = ((auto / this.terapiavigente.sesionnum) * 100);

        this.httpSesionService.insertTerapia(this.asistencia).subscribe(autor => {
          this.asistencia = autor;
          console.log(this.asistencia);

          this.modal.hide();
          this.getTerapia(this.id);
          this.alertaService.mostrarAlertaInfoGeneric();
          this.limpiar();
        });
      }
    }
  }

  public getTerapia(id) {
    if (id != null) {
      this.show = true;
      this.httpSeguimientopsicologicoService.getSeguimientopsicologicoByPersona(id).subscribe(recibe => {
        this.terapias = recibe;
        this.terapias = this.getActivos(configVariables.APIVariable.SeguimientoPsicologico.activo);
        //console.log(this.terapias);
        if (this.terapias.length != 0) {
          for (var index = 0; index < this.terapias.length; index++) {
            this.terapiavigente = this.terapias[0];
            // console.log(this.terapiavigente);
          }
          this.show1 = true;
          //this.motivo = this.diagnosticovigente.trfMotivo.motivo;
          this.httpSesionService.getTerapia(this.terapiavigente.id).subscribe(recibess => {
            this.sesiones = recibess;
            console.log(this.terapiavigente.sesionnum);


            this.porcentaje = ((this.sesiones.length / this.terapiavigente.sesionnum) * 100);
            this.show1 = false;
          });
        } else {
          this.alertaService.mostrarAlertaInfo("PRIMERO", "Ingrese Diagnóstico Psicológico");
        }
        this.show = false;
      });
    }
  }

  public getActivos(codigo: string) {
    return this.terapias.filter(cat => cat.estado === codigo);
  }

  public viewEstado(id) {
    let data = this.catalogos.find(acti => acti.id == id)
    if (data != null) {
      return data.nombre;
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

  public setSeguimientoId(seguimiento) {
    this.asistencia = seguimiento;
  }

  black() {
    this.router.navigate(['seguimientopsicologico/terapiaspsicologico'])
  }
  limpiar() {
    this.asistencia = new Sesion();
  }
  close() {
    this.modal.hide();
    this.getTerapia(this.id);
    this.limpiar();
  }
  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Sesion.getValidators()
    };
  }

}
