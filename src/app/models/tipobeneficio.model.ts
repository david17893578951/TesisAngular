export class TipoBeneficio {
    id: number;
    tipo: string;
    mdcBeneficio: any;
    constructor() { }
    public static getValidators() {
        return {
            tipo: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
        }
    }
}