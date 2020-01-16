export class Terapia {
    id: number;
    cqc: string;
    cqcb: boolean;
    crioterapia: string;
    crioterapiab: boolean;
    electroterapia: string;
    electroterapiab: boolean;
    estiramiento: string;
    estiramientob: boolean;
    fecha: Date;
    indicacion: string;
    isometrico: string;
    isometricob: boolean;
    isotonico: string;
    isotonicob: boolean;
    laser: string;
    laserb: boolean;
    magneto: string;
    magnetob: boolean;
    numsesionactual: number;
    otro: string;
    otrob: boolean;
    parafina: string;
    parafinab: boolean;
    porcentajeasistido: number;
    propiocepcion: string;
    propiocepcionb: boolean;
    terapeutico: string;
    terapeuticob: boolean;
    u: string;
    ub: boolean;
    trpDiagnosticoTerapeutico: any;
    constructor() { }
    public static getValidators() {
        return {
            indicacion: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
        
            
        }
    }
    
}