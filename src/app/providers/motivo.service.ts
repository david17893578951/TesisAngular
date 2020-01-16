import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class MotivoService {
  constructor(private servicio: ObservableService) { }

  public getMotivo() {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Motivo.resource}`)
  }
  public insertMotivo(beneficio:any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.Motivo.resource}`, beneficio);
  }
  /*public editBeneficio(beneficio:any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.Beneficiarios.resource}`, beneficio);
  }*/
}