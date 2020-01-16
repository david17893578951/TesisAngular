import { Routes, RouterModule } from '@angular/router';
import { RegistroFisioterapiaComponent } from "app/registro-fisioterapia/registro-fisioterapia.component";
import { RegistroComponent } from "app/registro-fisioterapia/registro/registro.component";
import { FisioterapiaComponent } from "app/registro-fisioterapia/fisioterapia/fisioterapia.component";

export const registrofisioterapiaRoutes: Routes = [
    {
        path: '',
        component: RegistroFisioterapiaComponent,
        data: {
            pageTitle: 'Registro Fisioterapia'
        }
    },
    {
        path: 'nuevo',
        component: RegistroComponent,
        data: {
            pageTitle: 'Nuevo Registro'
        }

    },
    {
        path: 'nuevo/:id',
        component: RegistroComponent,
        data: {
            pageTitle: 'Editar Registro'
        }

    },
    {
        path: 'fisioterapia/:id',
        component: FisioterapiaComponent,
        data: {
            pageTitle: 'Nuevo Registro para Fisioterapia'
        }

    },

];

export const registrofisioterapiaRouting = RouterModule.forChild(registrofisioterapiaRoutes);