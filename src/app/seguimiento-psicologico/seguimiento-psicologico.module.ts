import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoPsicologicoComponent } from './seguimiento-psicologico.component';
import { SmartadminModule } from "app/shared/smartadmin.module";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { DatoPersonaModule } from "app/dato-persona/dato-persona.module";
import { SmartadminValidationModule } from "app/shared/forms/validation/smartadmin-validation.module";
import { seguimientopsicologicoRouting } from "app/seguimiento-psicologico/seguimiento-psicologico.routing";
import { PersonaService, CatalogoService, SeguimientopsicologicoService, MotivoService, SesionService, CalendarioService } from "app/providers";
import { AlertasService, ObservableService } from "app/core/service";
import { DiagnosticoPsicologicoComponent } from './diagnostico-psicologico/diagnostico-psicologico.component';
import { MenuDiagPsicologicoComponent } from './diagnostico-psicologico/menu-diag-psicologico/menu-diag-psicologico.component';
import { DiagVigenteComponent } from './diagnostico-psicologico/menu-diag-psicologico/diag-vigente/diag-vigente.component';
import { DiagNovigenteComponent } from './diagnostico-psicologico/menu-diag-psicologico/diag-novigente/diag-novigente.component';
import { TerapiaPsicologicaComponent } from './terapia-psicologica/terapia-psicologica.component';
import { ControlPsicologicoComponent } from './terapia-psicologica/control-psicologico/control-psicologico.component';
import { DatoBeneficioModule } from "app/dato-beneficio/dato-beneficio.module";
import { ReportePsicologiaComponent } from './reporte-psicologia/reporte-psicologia.component';
import { NgCircleProgressModule } from "ng-circle-progress";
import { CalendarioFisioterapiaComponent } from './calendario-fisioterapia/calendario-fisioterapia.component';
import { CalendarioPsicologiaComponent } from './calendario-psicologia/calendario-psicologia.component';
import { CalendarWidgetComponent } from "app/seguimiento-psicologico/calendario-psicologia/calendar-widget";
import { DraggableEvent } from "app/seguimiento-psicologico/calendario-psicologia/draggable-event";
import { EventsService } from "app/seguimiento-psicologico/calendario-psicologia/shared";

@NgModule({
  imports: [
    CommonModule,
    seguimientopsicologicoRouting,
    SmartadminModule,
    SmartadminDatatableModule,
    DatoPersonaModule,
    DatoBeneficioModule,
    SmartadminValidationModule,
    NgCircleProgressModule.forRoot({}),
  ],
  declarations: [CalendarWidgetComponent,
    DraggableEvent, SeguimientoPsicologicoComponent, DiagnosticoPsicologicoComponent, MenuDiagPsicologicoComponent, DiagVigenteComponent, DiagNovigenteComponent, TerapiaPsicologicaComponent, ControlPsicologicoComponent, ReportePsicologiaComponent, CalendarioPsicologiaComponent],


  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  providers: [EventsService, CalendarioService, SesionService, MotivoService, SeguimientopsicologicoService, PersonaService, CatalogoService, AlertasService, ObservableService]



})
export class SeguimientoPsicologicoModule { }
