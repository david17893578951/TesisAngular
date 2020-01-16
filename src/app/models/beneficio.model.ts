export class Beneficio {
    id: any;
    disposicion: string;
    estado: boolean;
    fechaAsignacion: Date;
    fdiPersona: any;
    constructor() { }
    public static getValidators() {
        return {
            disposicion: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            disposicions: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },           
        }
    }
}
