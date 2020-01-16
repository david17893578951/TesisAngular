export class SeguimientoPsicologico {
    id: any;
    trfMotivo: any;
    fdiPersona: any;
    alcohol: boolean;
    anamnesiFamiliar: string;
    droga: boolean;
    estado: boolean;
    fecha: Date;
    medicamento: boolean;
    permanente: string;
    permanenteb: boolean;
    psicoanamnesiFamiliar: string;
    psicoanamnesiPersonal: string;
    sesionnum: number;
    tabaco: boolean;
    transitoria: string;
    transitoriab: boolean;
    constructor() { }
    public static getValidators() {
        return {
            trfMotivo: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            psicoanamnesiFamiliar: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            psicoanamnesiPersonal: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            sesionnum: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
        }
    }
}