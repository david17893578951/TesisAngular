import { Component, OnInit } from '@angular/core';
import { Sesion } from "app/models";
import { AlertasService } from "app/core/service";
import { SesionService } from "app/providers";
declare var moment: any;

@Component({
  selector: 'app-reporte-psicologia',
  templateUrl: './reporte-psicologia.component.html',
  //styleUrls: ['./reporte-psicologia.component.css']
})
export class ReportePsicologiaComponent implements OnInit {
public terapias: any;
  public terapias1: any;
  public terapias2: any;
  public terapias3: any;
  public terapias4: any;
  public show: boolean;
  public f1: Date;
  public f2: Date;

  public temp_var: Object = false;

  constructor(
    private httpTerapiaService: SesionService,
    private alertaService: AlertasService
  ) { }

  ngOnInit() {
    this.terapias = new Sesion();
  }


  public getTerapia(fecha1, fecha2) {
    if (fecha1 != null && fecha2 != null) {
      this.f1 = moment(fecha1).format("YYYY/MM/DD")
      this.f2 = moment(fecha2).format("YYYY/MM/DD")
      if (this.f1 > this.f2) {
        this.alertaService.mostrarAlertaInfo("Fecha", "La fecha Fin debe ser mayor a la fecha Inicial");
      } else {
        this.httpTerapiaService.getTerapiabyfechas(fecha1, fecha2).subscribe(recibess => {
          this.terapias = recibess;
          console.log(this.terapias.length);
          this.temp_var = true;
        });
      }
    }
  }

}
