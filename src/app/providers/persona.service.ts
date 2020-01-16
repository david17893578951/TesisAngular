import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class PersonaService {
  constructor(private servicio: ObservableService) { }

  public getPersona(id: number) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Personas.resource}/${id}`)
  }

  public findPersonabyCedula(id: any) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Personas.findcedula}/${id}`)
  }
  public getAllPersonas() {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Personas.resource}`)
  }

  public insertPersona(persona: any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.Personas.resource}`, persona);
  }
  public editPersona(persona: any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.Personas.resource}`, persona);
  }
}