import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import { SmartadminModule } from "../shared/smartadmin.module";
import { HomeComponent } from "./home.component";
import { DatoPersonaModule } from "app/dato-persona/dato-persona.module";
import { BsDropdownModule } from "ngx-bootstrap";
import { CalendarWidgetComponent } from "app/ModuloHome/calendar-widget";
import { DraggableEvent } from "app/ModuloHome/draggable-event";
import { EventsService } from "app/ModuloHome/shared";
import { CalendarioService } from "app/providers";


@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SmartadminModule,
    DatoPersonaModule,
    BsDropdownModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],


  declarations: [
    HomeComponent,
    CalendarWidgetComponent,
    DraggableEvent,
  ],

  exports: [
    
    CalendarWidgetComponent,
    DraggableEvent,
    HomeComponent,
  ],

  providers: [EventsService, CalendarioService]
})
export class HomeModule { }
