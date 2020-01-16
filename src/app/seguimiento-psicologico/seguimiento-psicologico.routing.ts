import { Routes, RouterModule } from '@angular/router';
import { SeguimientoFisioterapiaComponent } from "app/seguimiento-fisioterapia/seguimiento-fisioterapia.component";
import { TerapiasComponent } from "app/seguimiento-fisioterapia/terapias/terapias.component";
import { MenuTerapiasComponent } from "app/seguimiento-fisioterapia/terapias/menu-terapias/menu-terapias.component";
import { AsistenciaFisioterapiaComponent } from "app/seguimiento-fisioterapia/asistencia-fisioterapia/asistencia-fisioterapia.component";
import { ControlFisioterapiaComponent } from "app/seguimiento-fisioterapia/asistencia-fisioterapia/control-fisioterapia/control-fisioterapia.component";
import { SeguimientoPsicologicoComponent } from "app/seguimiento-psicologico/seguimiento-psicologico.component";
import { DiagnosticoPsicologicoComponent } from "app/seguimiento-psicologico/diagnostico-psicologico/diagnostico-psicologico.component";
import { TerapiaPsicologicaComponent } from "app/seguimiento-psicologico/terapia-psicologica/terapia-psicologica.component";
import { ControlPsicologicoComponent } from "app/seguimiento-psicologico/terapia-psicologica/control-psicologico/control-psicologico.component";
import { ReportePsicologiaComponent } from "app/seguimiento-psicologico/reporte-psicologia/reporte-psicologia.component";
import { CalendarioPsicologiaComponent } from "app/seguimiento-psicologico/calendario-psicologia/calendario-psicologia.component";

export const seguimientopsicologicoRoutes: Routes = [
    {
        path: '',
        component: SeguimientoPsicologicoComponent,
        data: {
            pageTitle: 'Seguimiento Psicológico'
        }
    },
    {
        path: 'diagpsicologico/:id',
        component: DiagnosticoPsicologicoComponent,
        data: {
            pageTitle: 'Diagnostico Psicológico'
        }
    },
    {
        path: 'terapiaspsicologico',
        component: TerapiaPsicologicaComponent,
        data: {
            pageTitle: 'Terapias Psicológicas'
        }
    },
     {
        path: 'controlpsicologico/:id',
        component: ControlPsicologicoComponent,
        data: {
            pageTitle: 'Control Psicológico'
        }
    },
    {
        path: 'reportepsicologia',
        component: ReportePsicologiaComponent,
        data: {
            pageTitle: 'Reporte Fisioterapias'
        }
    },
    {
        path: 'calendariopsicologia',
        component: CalendarioPsicologiaComponent,
        data: {
            pageTitle: 'Calendario Psicologia'
        }
    },




];

export const seguimientopsicologicoRouting = RouterModule.forChild(seguimientopsicologicoRoutes);