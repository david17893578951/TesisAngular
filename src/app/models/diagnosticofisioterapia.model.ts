export class Diagnosticofisioterapia {
    id: number;
    antecedente: string;
    areaAfectada: string;
    diagnostico: string;
    escala: string;
    sesionnum: number;
    trfMotivo:any;
    trpTerapias:any;
    trpSeguimientoFisioterapia:any;
    constructor() { }
    public static getValidators() {
        return {
            
            id: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            trfMotivo: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
           gradoMovilidad: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
             areaAfectada: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
             sesionnum: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
         antecedente: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
         diagnostico: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
          
           
           

        }
    }
}
