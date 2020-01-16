export class Sesion {
    id: number;
    conclusion: string;
    fecha: Date;
    numsesionactual: number;
    porcentajeasistido: number;
    recomendacion: string;
    psgSeguimientoPsicologico: any;
    constructor() { }
    public static getValidators() {
        return {
            conclusion: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            recomendacion: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },

        }
    }

}