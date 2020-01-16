import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroFisioterapiaComponent } from './registro-fisioterapia.component';
import { registrofisioterapiaRouting } from "app/registro-fisioterapia/registro-fisioterapia.routing";
import { CatalogoService, PersonaService, SriService, RegistrofisioterapiaService } from "app/providers";
import { AlertasService, ObservableService } from "app/core/service";
import { SmartadminModule } from "app/shared/smartadmin.module";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { DatoPersonaModule } from "app/dato-persona/dato-persona.module";
import { RegistroComponent } from './registro/registro.component';
import { FisioterapiaComponent } from './fisioterapia/fisioterapia.component';
import { SmartadminValidationModule } from "app/shared/forms/validation/smartadmin-validation.module";
import { DatoBeneficioModule } from "app/dato-beneficio/dato-beneficio.module";


@NgModule({
  imports: [
    CommonModule,
    registrofisioterapiaRouting,
    SmartadminModule,
    SmartadminDatatableModule,
    SmartadminValidationModule,
    DatoPersonaModule,
    DatoBeneficioModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
    
  declarations: [RegistroFisioterapiaComponent,RegistroComponent,FisioterapiaComponent],

  providers: [PersonaService,CatalogoService,AlertasService,ObservableService,SriService,RegistrofisioterapiaService]

})
export class RegistroFisioterapiaModule { }
