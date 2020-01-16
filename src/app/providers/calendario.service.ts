import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class CalendarioService {
  constructor(private servicio: ObservableService) { }

  public getAllCalendario() {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Calendario.resource}`)
  }

  public insertCalendario(calendario: any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.Calendario.resource}`, calendario);
  }
  public editCalendario(calendario: any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.Calendario.resource}`, calendario);
  }
}