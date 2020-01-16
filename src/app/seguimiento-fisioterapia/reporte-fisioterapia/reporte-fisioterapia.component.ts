import { Component, OnInit, Input, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { TerapiaService } from "app/providers";
import { ShowSelectionPanelComponent } from '../../+forms/+image-cropping/show-selection-panel/show-selection-panel.component';
import { DatatableComponent } from '../../shared/ui/datatable/datatable.component';
import { Terapia } from "app/models/terapia.model";
import { getMilliseconds } from "ngx-bootstrap/chronos/utils/date-getters";
import { AlertasService } from "app/core/service";
declare var moment: any;

@Component({
  selector: 'app-reporte-fisioterapia',
  templateUrl: './reporte-fisioterapia.component.html',
  //styleUrls: ['./reporte-fisioterapia.component.css']
})
export class ReporteFisioterapiaComponent implements OnInit {
  //@ViewChild('content') content: ElementRef;
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
    private httpTerapiaService: TerapiaService,
    private alertaService: AlertasService
  ) { }

  ngOnInit() {
    this.terapias = new Terapia();

  }



  public getTerapia(fecha1, fecha2) {
    if (fecha1 != null && fecha2 != null) {
      this.f1 = moment(fecha1).format("YYYY/MM/DD")
      this.f2 = moment(fecha2).format("YYYY/MM/DD")


      if (this.f1 > this.f2) {
        this.alertaService.mostrarAlertaInfo("Fecha", "La fecha Fin debe ser mayor a la fecha Inicial");
      } else {
        console.log(fecha1);
        this.httpTerapiaService.getTerapiabyfechas(fecha1, fecha2).subscribe(recibess => {

          this.terapias = recibess;
           console.log(this.terapias);
          this.temp_var = true;
        });
      }
    }
  }
}
