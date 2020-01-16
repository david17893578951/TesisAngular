export class Descuento {
    id: number;
    fdiPersona: any;
    descuento: string;
    estado: boolean;
    fechaAsignacion: Date;
    observacion: string;
    tipo: string;
    constructor() { }
    public static getValidators() {
        return {
            tipo: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            descuento: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
           


        }
    }
}