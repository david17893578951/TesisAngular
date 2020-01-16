import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class SriService {
  constructor(private servicio: ObservableService) { }

  public getPersona(id: any) {
    return this.servicio.getUrlServicioGet(`${config.apiOtro.urlSri}${config.apiOtro.Sri.resource}/${id}`)
  }
}