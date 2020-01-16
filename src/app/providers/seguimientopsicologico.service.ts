import { Injectable } from '@angular/core';

import { ObservableService } from "app/core/service/observable.service";
import { config } from "app/config";

@Injectable()
export class SeguimientopsicologicoService {
    constructor(private servicio: ObservableService) { }

    public getSeguimientopsicologicoByPersona(id: number) {
        return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.SeguimientoPsicologico.resource}/${id}`)
    }
    public insertSeguimientopsicologico(seguimiento: any) {
        return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.SeguimientoPsicologico.resource}`, seguimiento);
    }
    public editSeguimientopsicologico(seguimiento: any) {
        return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.SeguimientoPsicologico.resource}`, seguimiento);
    }

}
