import { Injectable } from '@angular/core';

import { ObservableService } from "app/core/service/observable.service";
import { config } from "app/config";

@Injectable()
export class CatalogoService {
    constructor(private servicio: ObservableService) { }
    
    public getAll() {
         return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.Catalogo.resource}`)
    }

}
