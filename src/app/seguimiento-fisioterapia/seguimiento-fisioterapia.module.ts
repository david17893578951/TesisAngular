import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertasService, ObservableService } from "app/core/service";
import { SmartadminModule } from "app/shared/smartadmin.module";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { DatoPersonaModule } from "app/dato-persona/dato-persona.module";
import { SeguimientoFisioterapiaComponent } from './seguimiento-fisioterapia.component';
import { PersonaService, CatalogoService, RegistrofisioterapiaService, DiagnosticofisioterapiaService, MotivoService, TerapiaService, CalendarioService } from "app/providers";
import { seguimientofisioterapiaRouting } from "app/seguimiento-fisioterapia/seguimiento-fisioterapia.routing";
import { TerapiasComponent } from './terapias/terapias.component';
import { MenuTerapiasComponent } from "app/seguimiento-fisioterapia/terapias/menu-terapias/menu-terapias.component";
import { TerapiaVigenteComponent } from './terapias/menu-terapias/terapia-vigente/terapia-vigente.component';
import { TerapiaNovigenteComponent } from './terapias/menu-terapias/terapia-novigente/terapia-novigente.component';
import { SmartadminValidationModule } from "app/shared/forms/validation/smartadmin-validation.module";
import { AsistenciaFisioterapiaComponent } from './asistencia-fisioterapia/asistencia-fisioterapia.component';
import { ControlFisioterapiaComponent } from './asistencia-fisioterapia/control-fisioterapia/control-fisioterapia.component';
import { DatoBeneficioModule } from "app/dato-beneficio/dato-beneficio.module";
import { ReporteFisioterapiaComponent } from './reporte-fisioterapia/reporte-fisioterapia.component';
import { FormsModule } from "@angular/forms";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CalendarioFisioterapiaComponent } from './calendario-fisioterapia/calendario-fisioterapia.component';
import { CalendarWidgetComponent } from "app/seguimiento-fisioterapia/calendario-fisioterapia/calendar-widget";
import { DraggableEvent } from "app/seguimiento-fisioterapia/calendario-fisioterapia/draggable-event";
import { EventsService } from "app/seguimiento-fisioterapia/calendario-fisioterapia/shared";
@NgModule({
  imports: [
    CommonModule,
    seguimientofisioterapiaRouting,
    SmartadminModule,
    SmartadminDatatableModule,
    DatoPersonaModule,
    FormsModule,
    SmartadminValidationModule,
    DatoBeneficioModule,
    NgCircleProgressModule.forRoot({}),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    CalendarWidgetComponent,
  //  DraggableEvent,
    SeguimientoFisioterapiaComponent,
    TerapiasComponent,
    MenuTerapiasComponent,
    TerapiaVigenteComponent,
    TerapiaNovigenteComponent,
    AsistenciaFisioterapiaComponent,
    ControlFisioterapiaComponent,
    ReporteFisioterapiaComponent,
    CalendarioFisioterapiaComponent
  ],

  providers: [EventsService,CalendarioService,TerapiaService, MotivoService, DiagnosticofisioterapiaService, RegistrofisioterapiaService, PersonaService, CatalogoService, AlertasService, ObservableService]

})
export class SeguimientoFisioterapiaModule { }
