import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class BeneficioService {
  constructor(private servicio: ObservableService) { }

  public getBeneficiosPersona(id: number) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Beneficiarios.resource}/${id}`)
  }
  public insertBeneficio(beneficio:any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.Beneficiarios.resource}`, beneficio);
  }
  public editBeneficio(beneficio:any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.Beneficiarios.resource}`, beneficio);
  }
}