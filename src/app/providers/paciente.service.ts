import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service";

@Injectable()
export class PacienteService {
  constructor(private servicio: ObservableService) { }

  public getOnePaciente(id: number) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Paciente.resource}/${id}`)
  }

  public getOnePacienteId(id: number) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Paciente.oneid}/${id}`)
  }

  public getAllPaciente() {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Paciente.resource}`)
  }

  public insertPaciente(paciente: any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.Paciente.resource}`, paciente);
  }
  public editPaciente(paciente: any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.Paciente.resource}`, paciente);
  }
}