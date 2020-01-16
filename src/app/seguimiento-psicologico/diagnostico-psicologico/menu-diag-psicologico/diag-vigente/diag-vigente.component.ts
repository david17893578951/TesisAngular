import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CatalogoService, SeguimientopsicologicoService, MotivoService } from "app/providers";
import { AlertasService } from "app/core/service";
import { SeguimientoPsicologico, Motivo } from "app/models";
import { configVariables } from "app/shared/variables.config";

@Component({
  selector: 'app-diag-vigente',
  templateUrl: './diag-vigente.component.html',
  //styleUrls: ['./diag-vigente.component.css']
})
export class DiagVigenteComponent implements OnInit {
  @ViewChild('modal') modal: any;
  @ViewChild('modal1') modal1: any;
  @Input() codigo: number;
  public catalogos: any;
  public show: boolean;
  public showCatalago: boolean;
  public terapia: any;
  public terapias: any;
  public motivos: any;
  public motivo: any;
  public motivoI: any;
  public show2: boolean;
  public terapianovigente: any;
  constructor(
    private alertaService: AlertasService,
    private httpCatalogo: CatalogoService,
    private httpMotivo: MotivoService,
    public httpSeguimientopsicologicoService: SeguimientopsicologicoService, ) { }

  ngOnInit() {
    this.terapia = new SeguimientoPsicologico();
    this.motivos = new Motivo();
    this.motivo = new Motivo();
    this.motivoI = new Motivo();
    this.findAllCatalogo();
    this.getTerapia(this.codigo);
    this.getMotivo();
  }

  public getMotivo() {
    this.show2 = true;
    this.httpMotivo.getMotivo().subscribe(recibe => {
      this.motivos = recibe;
      this.motivos = this.getMotivoFisioterapia("psicologico");

      this.show2 = false;
    });
  }

  public getMotivoFisioterapia(codigo: string) {
    return this.motivos.filter(cat => cat.area === codigo);
  }

  public addOrUpdate(valid) {
    if (!valid) return;
    if (this.terapia.id != null) {
      this.terapia.trfMotivo = { id: this.motivoI.id }
      console.log(this.terapia);
      this.httpSeguimientopsicologicoService.editSeguimientopsicologico(this.terapia).subscribe(autor => {
        this.modal.hide();
        this.getTerapia(this.codigo);
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();
      });
    } else {
      this.terapia.trfMotivo = { id: this.motivoI.id }
      this.terapia.estado = configVariables.APIVariable.SeguimientoPsicologico.activo;
      this.terapia.fdiPersona = { id: this.codigo }
      this.terapia.fecha = new Date();
      if (this.terapia.trfMotivo != null) {
        this.httpSeguimientopsicologicoService.insertSeguimientopsicologico(this.terapia).subscribe(autor => {
          this.modal.hide();
          this.getTerapia(this.codigo);
          this.alertaService.mostrarAlertaInfoGeneric();
          this.limpiar();
        });
      }
    }
  }

  public Nuevomotivo(valid) {
    if (!valid) return;
    this.motivo = new Motivo();
    this.motivo.area = "psicologico";
    this.motivo.motivo = valid;
    console.log(this.motivo);
    this.httpMotivo.insertMotivo(this.motivo).subscribe(autor => {
      this.motivo = autor;
      this.closee()
      this.getMotivo();
      this.getTerapia(this.codigo);
      console.log(this.motivo);
    });
  }


  public closee() {
    this.modal1.hide();
    this.getTerapia(this.codigo);
    this.motivoI = new Motivo();
  }

  public getTerapia(id) {
    if (id != null) {
      this.show = true;
      this.httpSeguimientopsicologicoService.getSeguimientopsicologicoByPersona(id).subscribe(recibe => {
        this.terapias = recibe;
        this.terapianovigente = this.getActivos(configVariables.APIVariable.SeguimientoPsicologico.activo);

        this.show = false;
      });
    }
  }

  public getActivos(codigo: string) {
    return this.terapias.filter(cat => cat.estado === codigo);
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

  public setSeguimientoId(seguimiento) {
    this.terapia = seguimiento;
    this.motivoI.id = this.terapia.trfMotivo.id
    console.log(this.terapia);
    console.log(this.motivo);
    console.log(this.motivoI);

  }


  limpiar() {
    this.terapia = new SeguimientoPsicologico();
  }
  close() {
    this.modal.hide();
    this.getTerapia(this.codigo);
    this.limpiar();
  }

  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: SeguimientoPsicologico.getValidators()
    };
  }

}
