export class Calendario {
    id: any;
    area: string;
    descripcion: string
    fechaFin: Date;
    fechaInicio: Date;
    constructor() { }
    public static getValidators() {
        return {
            descripcion: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            fechaInicio: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
        }
    }
}
