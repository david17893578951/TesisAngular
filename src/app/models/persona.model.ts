export class Persona {
    id: number;
    apellido: string;
    canton: string;
    cedula: string;
    correo: string;
    dirRecidencia: String;
    discapacidad: boolean;
    estado: boolean;
    estadoCivil: string;
    etnia: string;
    fechaNacimiento: Date;
    grupoSanguineo: string;
    nacionalidad: string;
    nombre: string;
    nommadre: string;
    nompadre: string;
    ocupacion: string;
    parroquia: string;
    provincia: string;
    sexo: string;
    telefono: string;
    telpadres: string;
    tipodiscapacidad: string;
    fdiDeportistas: any;
    fdiEntrenadors: any;
    fdiUsersRoles: any;
    constructor() { }
    public static getValidators() {
        return {
            cedula: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
                       apellido: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            
            telefono: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
        }
    }
}