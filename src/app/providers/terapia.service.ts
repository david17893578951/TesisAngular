import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class TerapiaService {
  constructor(private servicio: ObservableService) { }


  public getTerapiabyfechas(f1: any,f2: any) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Terapia.resource}/finicio/${f1}/fin/${f2}`)
  }

  public getTerapia(id: number) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Terapia.resource}/${id}`)
  }

  public insertTerapia(terapia: any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.Terapia.resource}`, terapia);
  }

  public editTerapia(terapia: any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.Terapia.resource}`, terapia);
  }

}