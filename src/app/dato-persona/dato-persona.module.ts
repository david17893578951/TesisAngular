import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatoPersonaComponent } from "app/dato-persona/dato-persona.component";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { SmartadminModule } from "app/shared/smartadmin.module";
import { PersonaService } from "app/providers";
import { AlertasService, ObservableService } from "app/core/service";

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
     SmartadminDatatableModule,
  ],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
 declarations: [DatoPersonaComponent],
 exports: [DatoPersonaComponent],
 providers: [PersonaService, AlertasService, ObservableService]
})
export class DatoPersonaModule { }
