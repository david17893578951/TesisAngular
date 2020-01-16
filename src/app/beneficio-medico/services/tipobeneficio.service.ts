import { Injectable } from '@angular/core';
import { config } from "app/config";
import { ObservableService } from "app/core/service/observable.service";

@Injectable()
export class TipoBeneficioService {
    constructor(private servicio: ObservableService) { }

    public getTipoBeneficiosPersona(id: number) {
        return this.servicio.getUrlServicioGet(`${config.api.urlMedica}${config.api.TipoBeneficiario.resource}/${id}`)
    }

    public insertTipoBeneficio(beneficio: any) {
        return this.servicio.getUrlServicioPost(`${config.api.urlMedica}${config.api.TipoBeneficiario.resource}`, beneficio);
    }
    public editTipoBeneficio(beneficio: any) {
        return this.servicio.getUrlServicioPut(`${config.api.urlMedica}${config.api.TipoBeneficiario.resource}`, beneficio);
    }
}