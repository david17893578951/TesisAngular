import { Injectable } from '@angular/core';

import { ObservableService } from "app/core/service/observable.service";
import { config } from "app/config";

@Injectable()
export class RegistrofisioterapiaService {
    constructor(private servicio: ObservableService) { }

    public getSeguimientofisioterapiaByPersona(id: number) {
        return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.SeguimientoFisioterapia.resource}/${id}`)
    }
    public insertRegistrofisioterapia(seguimientofisioterapia: any) {
        return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.SeguimientoFisioterapia.resource}`, seguimientofisioterapia);
    }
    public editRegistrofisioterapia(seguimientofisioterapia: any) {
        return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.SeguimientoFisioterapia.resource}`, seguimientofisioterapia);
    }
}
