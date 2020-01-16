import { Routes, RouterModule } from '@angular/router';
import { SeguimientoFisioterapiaComponent } from "app/seguimiento-fisioterapia/seguimiento-fisioterapia.component";
import { TerapiasComponent } from "app/seguimiento-fisioterapia/terapias/terapias.component";
import { MenuTerapiasComponent } from "app/seguimiento-fisioterapia/terapias/menu-terapias/menu-terapias.component";
import { AsistenciaFisioterapiaComponent } from "app/seguimiento-fisioterapia/asistencia-fisioterapia/asistencia-fisioterapia.component";
import { ControlFisioterapiaComponent } from "app/seguimiento-fisioterapia/asistencia-fisioterapia/control-fisioterapia/control-fisioterapia.component";
import { ReporteFisioterapiaComponent } from "app/seguimiento-fisioterapia/reporte-fisioterapia/reporte-fisioterapia.component";
import { CalendarioFisioterapiaComponent } from "app/seguimiento-fisioterapia/calendario-fisioterapia/calendario-fisioterapia.component";

export const seguimientofisioterapiaRoutes: Routes = [
    {
        path: '',
        component: SeguimientoFisioterapiaComponent,
        data: {
            pageTitle: 'Seguimiento Fisioterapia'
        }
    },
    {
        path: 'terapias/:id',
        component: TerapiasComponent,
        data: {
            pageTitle: 'Terapias'
        }
    },
    {
        path: 'asistenciafisioterapias',
        component: AsistenciaFisioterapiaComponent,
        data: {
            pageTitle: 'Asistencia Fisioterapias'
        }
    },
    {
        path: 'controlfisioterapias/:id',
        component: ControlFisioterapiaComponent,
        data: {
            pageTitle: 'Control Fisioterapias'
        }
    },
    {
        path: 'reportefisioterapia',
        component: ReporteFisioterapiaComponent,
        data: {
            pageTitle: 'Reporte Fisioterapias'
        }
    },
    {
        path: 'calendariofisioterapia',
        component: CalendarioFisioterapiaComponent,
        data: {
            pageTitle: 'Calendario Fisioterapias'
        }
    },


];

export const seguimientofisioterapiaRouting = RouterModule.forChild(seguimientofisioterapiaRoutes);