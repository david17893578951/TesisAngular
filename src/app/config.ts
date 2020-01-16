//import { environment } from '../environments/environment';

import { environment } from "environments/environment";

export const config = {

    api: {
        urlMedica: environment.apiMedica.url,

        Beneficiarios: {
            resource: "/beneficio",
        },
        Catalogo: {
            resource: "/catalogo",
        },
        TipoBeneficiario: {
            resource: "/tipobeneficio",
        },

        Descuento: {
            resource: "/descuento",
        },

        Personas: {
            resource: "/persona",
            findcedula: "/persona/find"
        },

        SeguimientoFisioterapia: {
            resource: "/fisioterapia",
        },

        DiagnosticoFisioterapia: {
            resource: "/diagnostico",
        },

        Motivo: {
            resource: "/motivo",
        },
        Terapia: {
            resource: "/terapia",
        },
        SeguimientoPsicologico: {
            resource: "/psicologico",
        },
        Sesion: {
            resource: "/sesion",
        },

        Calendario: {
            resource: "/calendario",
        },



        Paciente: {
            resource: "/patologicio",
            oneid: "/id"
        },

    },
    apiOtro: {
        urlSri: environment.apiSri.url,
        Sri: {
            resource: "/persona",
        }
    }

}