import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CatalogoService, RegistrofisioterapiaService, DiagnosticofisioterapiaService, MotivoService } from "app/providers";
import { Registrofisioterapia, Diagnosticofisioterapia, Motivo } from "app/models";
import { AlertasService } from "app/core/service";
import { configVariables } from "app/shared/variables.config";

@Component({
  selector: 'app-terapia-vigente',
  templateUrl: './terapia-vigente.component.html',
  //styleUrls: ['./terapia-vigente.component.css']
})
export class TerapiaVigenteComponent implements OnInit {
  @Input() codigo: number;
  @ViewChild('modal') modal: any;
  public catalogos: any;
  public motivos: any;
  public motivonuevo: any;
  public motivo: any;
  //public motivofisioterapia: any;
  public show: boolean;
  public show2: boolean;
  public showCatalago: boolean;
  public terapias: any;
  public diagnostico: any;
  public terapiavigente: any;
  public diagnosticovigente: any;

  constructor(
    private alertaService: AlertasService,
    private httpMotivo: MotivoService,
    private httpCatalogo: CatalogoService,
    private httpRegistrofisioterapiaService: RegistrofisioterapiaService,
    private httpDiagnosticofisioterapiaService: DiagnosticofisioterapiaService,
  ) { }

  ngOnInit() {
    this.terapias = new Registrofisioterapia();
    this.terapiavigente = new Registrofisioterapia();
    this.diagnosticovigente = new Diagnosticofisioterapia();
    this.motivos = new Motivo();
    this.motivo = new Motivo();
    this.findAllCatalogo();
    this.getTerapia(this.codigo);
    this.getMotivo();
  }








  public Nuevomotivo(valid) {
    if (!valid) return;
     this.motivo = new Motivo();
    console.log(valid);
    this.motivo.area = "fisioterapia";
    this.motivo.motivo = valid;
    console.log(this.motivo);
    this.httpMotivo.insertMotivo(this.motivo).subscribe(autor => {
      this.motivo = autor;
      this.closee()
      this.getMotivo();
      // this.getTerapia(this.codigo);
      this.motivo = new Motivo();
     // console.log(this.motivo);
      
    });
  }


  public addOrUpdate(valid) {
    if (!valid) return;
   // console.log(this.diagnosticovigente);
    if (this.diagnosticovigente.id != null) {
      this.diagnosticovigente.trfMotivo = { id: this.motivo.id }
      this.httpDiagnosticofisioterapiaService.editDiagnosticofisioterapia(this.diagnosticovigente).subscribe(autor => {
        console.log(autor);
        this.getTerapia(this.codigo);
        this.alertaService.mostrarAlertaInfoGeneric();
      });
    } else {
      console.log(this.diagnosticovigente);
      this.diagnosticovigente.trpSeguimientoFisioterapia = { id: this.terapiavigente.id }
      this.diagnosticovigente.trfMotivo = { id: this.motivo.id }
       console.log(this.diagnosticovigente);
      this.httpDiagnosticofisioterapiaService.insertDiagnosticofisioterapia(this.diagnosticovigente).subscribe(autor => {
        this.getTerapia(this.codigo);

        this.alertaService.mostrarAlertaInfoGeneric();
      });
    }
  }

  public getMotivo() {
    this.show2 = true;
    this.httpMotivo.getMotivo().subscribe(recibe => {
      this.motivos = recibe;
      console.log(this.motivos);
      
      this.motivos = this.getMotivoFisioterapia("fisioterapia");
      this.show2 = false;
    });
  }

  closee() {
    this.modal.hide();
    this.getTerapia(this.codigo);
    this.getMotivo();
    //this.limpiar();
  }

  public getMotivoFisioterapia(codigo: string) {
    return this.motivos.filter(cat => cat.area === codigo);
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
              this.motivo.id = this.diagnosticovigente.trfMotivo.id;
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

  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Diagnosticofisioterapia.getValidators()
    };
  }



}
