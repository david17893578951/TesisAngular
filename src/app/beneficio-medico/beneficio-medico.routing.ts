import { Routes, RouterModule } from '@angular/router';
import { BeneficioMedicoComponent } from "app/beneficio-medico/beneficio-medico.component";
import { BeneficiarioComponent } from "app/beneficio-medico/beneficiario/beneficiario.component";

export const beneficiomedicoRoutes: Routes = [
    {
        path: '',
        component: BeneficioMedicoComponent,
        data: {
            pageTitle: 'Deportistas Beneficiados'
        }
        
    },
    {
        path: 'beneficiario',
        component: BeneficiarioComponent,
        data: {
            pageTitle: 'Beneficiado'
        }
        
    },
    {
        path: 'beneficiario/:id',
        component: BeneficiarioComponent,
        data: {
            pageTitle: 'Beneficiado'
        }
        
    },

];

export const beneficiomedicoRouting = RouterModule.forChild(beneficiomedicoRoutes);