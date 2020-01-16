import { Routes, RouterModule } from '@angular/router';
import { BeneficioMedicoComponent } from "app/beneficio-medico/beneficio-medico.component";
import { BeneficiarioComponent } from "app/beneficio-medico/beneficiario/beneficiario.component";
import { AntecedenteMedicoComponent } from "app/antecedente-medico/antecedente-medico.component";
import { NuevoPacienteComponent } from "app/antecedente-medico/nuevo-paciente/nuevo-paciente.component";
import { CabeceraAntecedenteMedicoComponent } from "app/antecedente-medico/cabecera-antecedente-medico/cabecera-antecedente-medico.component";

export const antecedentemedicoRoutes: Routes = [
    {
        path: '',
        component: AntecedenteMedicoComponent,
        data: {
            pageTitle: 'Antecedente de paciente'
        },
    },
    {
        path: 'nuevo',
        component: NuevoPacienteComponent,
        data: {
            pageTitle: 'Nuevo Paciente'
        }
    },
    {
        path: 'nuevo/:id',
        component: NuevoPacienteComponent,
        data: {
            pageTitle: 'Nuevo Paciente'
        }
    },
    {
        path: 'cabecera',
        component: CabeceraAntecedenteMedicoComponent,
        data: {
            pageTitle: 'Antecedente Patologico'
        }
    },

{
        path: 'cabecera/:id',
        component: CabeceraAntecedenteMedicoComponent,
        data: {
            pageTitle: 'Antecedente'
        }
    },
];

export const antecedentemedicoRouting = RouterModule.forChild(antecedentemedicoRoutes);