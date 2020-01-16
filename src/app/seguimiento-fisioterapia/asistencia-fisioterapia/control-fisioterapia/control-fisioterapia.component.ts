import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RegistrofisioterapiaService, DiagnosticofisioterapiaService, CatalogoService, TerapiaService, MotivoService } from "app/providers";
import { AlertasService } from "app/core/service";
import { Registrofisioterapia, Diagnosticofisioterapia, Motivo } from "app/models";
import { Terapia } from "app/models/terapia.model";
import { configVariables } from "app/shared/variables.config";
import { FadeInTop } from "app/shared/animations/fade-in-top.decorator";
@Component({
  selector: 'app-control-fisioterapia',
  templateUrl: './control-fisioterapia.component.html',
  // styleUrls: ['./control-fisioterapia.component.css']
})
export class ControlFisioterapiaComponent implements OnInit {
  @ViewChild('modal') modal: any;
  public id: number
  public porcentaje: number;
  public porcentaje1: string
  public catalogos: any;
  public show: boolean;
  public show1: boolean;
  public terapias: any;
  public diagnostico: any;
  public terapiavigente: any;
  public diagnosticovigente: any;
  public showCatalago: boolean;
  public asistencias: any;
  public asistencia: any;
  public motivo: any;
  public show2: boolean;

  constructor(
    private routeurl: ActivatedRoute,
    private alertaService: AlertasService,
    private httpCatalogo: CatalogoService,
    private router: Router,
    private httpRegistrofisioterapiaService: RegistrofisioterapiaService,
    private httpDiagnosticofisioterapiaService: DiagnosticofisioterapiaService,
    private httpTerapiaService: TerapiaService,

  ) { }

  ngOnInit() {
    this.routeurl.params.subscribe(params => {
      this.id = params['id'];
    });
    //this.asistencias = new Terapia ();
    this.terapiavigente = new Registrofisioterapia();
    this.diagnosticovigente = new Diagnosticofisioterapia();
    this.asistencia = new Terapia()
    this.getTerapia(this.id);
    this.findAllCatalogo();

  }



  public addOrUpdate(valid) {
    if (!valid) return;
    console.log(this.asistencia);
    if (this.asistencia.id != null) {
      this.httpTerapiaService.editTerapia(this.asistencia).subscribe(autor => {
        this.modal.hide();
        this.getTerapia(this.id);
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();
      });
    } else {

      this.asistencia.fecha = new Date();
      this.asistencia.trpDiagnosticoTerapeutico = { id: this.diagnosticovigente.id }

      if (this.asistencia.indicacion != null) {
        
        var auto = this.asistencias.length + 1;
        this.asistencia.numsesionactual = auto;
        this.asistencia.porcentajeasistido = ((auto / this.diagnosticovigente.sesionnum) * 100);
        this.httpTerapiaService.insertTerapia(this.asistencia).subscribe(autor => {
          this.asistencia = autor;
          console.log(this.asistencia+"hola");

          this.modal.hide();
          this.getTerapia(this.id);
          this.alertaService.mostrarAlertaInfoGeneric();
          this.limpiar();
        });
      }
    }
  }

  public setSeguimientoId(seguimiento) {
    this.asistencia = seguimiento;
    console.log("hola");
    
  }


  limpiar() {
    this.asistencia = new Terapia();
  }
  close() {
    this.modal.hide();
    this.getTerapia(this.id);
    this.limpiar();
  }

  public getTerapia(id) {
    if (id != null) {
      this.show = true;
      this.httpRegistrofisioterapiaService.getSeguimientofisioterapiaByPersona(id).subscribe(recibe => {
        this.terapias = recibe;
        this.terapias = this.getActivos(configVariables.APIVariable.Beneficio.activo);
        if (this.terapias.length != 0) {
          for (var index = 0; index < this.terapias.length; index++) {
            this.terapiavigente = this.terapias[0];
          }
          this.httpDiagnosticofisioterapiaService.getDiagnostico(this.terapiavigente.id).subscribe(recibes => {
            this.diagnostico = recibes;


            if (this.diagnostico.length != 0) {
              for (var index = 0; index < this.diagnostico.length; index++) {
                this.diagnosticovigente = this.diagnostico[0];
              }
              this.show1 = true;
              this.motivo = this.diagnosticovigente.trfMotivo.motivo;
              this.httpTerapiaService.getTerapia(this.diagnosticovigente.id).subscribe(recibess => {
                this.asistencias = recibess;
                this.porcentaje = ((this.asistencias.length / this.diagnosticovigente.sesionnum) * 100);
                this.show1 = false;
              });
            } else {
              this.alertaService.mostrarAlertaInfo("SEGUNDO", "Ingrese Diagnostico Fisioterapéutico");
            }
          });
        } else {
          this.alertaService.mostrarAlertaInfo("PRIMERO", "Ingrese Diagnóstico Médico");
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

  black() {
    this.router.navigate(['seguimientofisioterapia/asistenciafisioterapias'])
  }

  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Terapia.getValidators()
    };
  }

}
