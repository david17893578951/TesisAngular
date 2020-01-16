import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service";

@Injectable()
export class DescuentoService {
  constructor(private servicio: ObservableService) { }

  public getDescuentoPersona(id: number) {
    return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Descuento.resource}/${id}`)
  }

  public insertDescuento(descuento:any) {
    return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.Descuento.resource}`, descuento);
  }
  public editDescuento(descuento:any) {
    return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.Descuento.resource}`, descuento);
  }
}