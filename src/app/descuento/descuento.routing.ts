import { Routes, RouterModule } from '@angular/router';
import { DescuentoComponent } from "app/descuento/descuento.component";
import { TipoDescuentoComponent } from "app/descuento/tipo-descuento/tipo-descuento.component";

export const descuentoRoutes: Routes = [
    {
        path: '',
        component: DescuentoComponent,
        data: {
            pageTitle: 'Deportistas Beneficiados'
        }
    },
    {
        path: 'tipodescuento',
        component: TipoDescuentoComponent,
        data: {
            pageTitle: 'Tipo Descuento'
        }

    },
    {
        path: 'tipodescuento/:id',
        component: TipoDescuentoComponent,
        data: {
            pageTitle: 'Tipo Descuento'
        }

    },
];

export const descuentoRouting = RouterModule.forChild(descuentoRoutes);