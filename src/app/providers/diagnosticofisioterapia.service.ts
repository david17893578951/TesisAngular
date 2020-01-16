import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class DiagnosticofisioterapiaService {
  constructor(private servicio: ObservableService) { }

  public getDiagnostico(id: number) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.DiagnosticoFisioterapia.resource}/${id}`)
  }

  public insertDiagnosticofisioterapia(diagnosticofisioterapia: any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.DiagnosticoFisioterapia.resource}`, diagnosticofisioterapia);
  }
  public editDiagnosticofisioterapia(diagnosticofisioterapia: any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.DiagnosticoFisioterapia.resource}`, diagnosticofisioterapia);
  }



}