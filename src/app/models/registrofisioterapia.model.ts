export class Registrofisioterapia {
    id: any;
    areaSug: string;
    diagnosticoSug: string;
    estado: boolean;
    fecha: Date
    numsesionSug: number;
    observacionSug: string;
    fdiPersona: any;
    constructor() { }
    public static getValidators() {
        return {
            areaSug: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            diagnosticoSug: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            fecha: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            numsesionSug: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            
        }
    }
}