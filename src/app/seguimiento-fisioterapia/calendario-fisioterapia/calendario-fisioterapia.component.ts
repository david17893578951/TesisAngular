import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarioService } from "app/providers";
import { AlertasService } from "app/core/service";
import { Calendario } from "app/models";
declare var moment: any;
@Component({
  selector: 'app-calendario-fisioterapia',
  templateUrl: './calendario-fisioterapia.component.html',
  //styleUrls: ['./calendario-fisioterapia.component.css']
})
export class CalendarioFisioterapiaComponent implements OnInit {
  @ViewChild('modal') modal: any;
  public calendarios: any;
  public calendario: any;
  public cargarpersonas: boolean;
  constructor(
    private httpCalendarioService: CalendarioService,
    private alertaService: AlertasService,
  ) { }

  ngOnInit() {
    this.calendario = new Calendario();
    this.getAllCalendario();
  }

  public addOrUpdate(valid) {


    if (!valid) return;
    if (this.calendario.id != null && this.calendario.fechaInicio != null && this.calendario.descripcion != null) {
      this.httpCalendarioService.editCalendario(this.calendario).subscribe(autor => {
        this.modal.hide();
        this.getAllCalendario();
        this.alertaService.mostrarAlertaInfoGeneric();
        this.limpiar();

      });
    } else {

      if (this.calendario.fechaInicio != null && this.calendario.descripcion != null) {
        console.log(this.calendario);
        this.calendario.area = "FISIOTERAPIA"
        // this.calendario.fechaInicio=moment(this.calendario.fechaInicio).format("YYYY/MM/DD")
        this.httpCalendarioService.insertCalendario(this.calendario).subscribe(autor => {
          this.modal.hide();
          this.getAllCalendario();
          this.alertaService.mostrarAlertaInfoGeneric();
          this.limpiar();
        });

      }

    }

  }

  public setSeguimientoId(descuento) {
    this.calendario = descuento;
  }

  public limpiar() {
    this.calendario = new Calendario();
  }

  public close() {
    this.modal.hide();
    this.getAllCalendario();
    this.limpiar();
  }

  public getAllCalendario() {
    this.cargarpersonas = true;
    this.httpCalendarioService.getAllCalendario().subscribe(recibe => {
      this.calendarios = recibe
       this.calendarios = this.getActivos("FISIOTERAPIA");
      //console.log( this.calen);

      this.cargarpersonas = false;
    });
  }
   public getActivos(codigo: string) {
    return this.calendarios.filter(cat => cat.area === codigo);
  }
  public getValidators() {
    return {
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: Calendario.getValidators()
    };
  }


}
