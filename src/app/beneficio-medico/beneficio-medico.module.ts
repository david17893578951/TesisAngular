import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficioMedicoComponent } from './beneficio-medico.component';
import { beneficiomedicoRouting, beneficiomedicoRoutes } from "app/beneficio-medico/beneficio-medico.routing";
import { SmartadminModule } from "app/shared/smartadmin.module";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { BeneficiarioComponent } from './beneficiario/beneficiario.component';
import { DatoPersonaModule } from "app/dato-persona/dato-persona.module";
import { MenuBeneficioComponent } from './beneficiario/menu-beneficio/menu-beneficio.component';
import { BeneficioActivoComponent } from './beneficiario/beneficio-activo/beneficio-activo.component';
import { BeneficioInactivoComponent } from './beneficiario/beneficio-inactivo/beneficio-inactivo.component';
import { TipoBeneficioComponent } from './beneficiario/beneficio-activo/tipo-beneficio/tipo-beneficio.component';
import { TipoBeneficioInactivoComponent } from './beneficiario/beneficio-inactivo/tipo-beneficio-inactivo/tipo-beneficio-inactivo.component';
import { CatalogoService, PersonaService, TipoBeneficioService, BeneficioService } from "app/providers";
import { AlertasService, ObservableService } from "app/core/service";
import { SmartadminValidationModule } from "app/shared/forms/validation/smartadmin-validation.module";



@NgModule({
  imports: [
    CommonModule,
    beneficiomedicoRouting,
    SmartadminModule,
    SmartadminValidationModule,
    SmartadminDatatableModule,
    DatoPersonaModule
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  
  declarations: [BeneficioMedicoComponent, BeneficiarioComponent, MenuBeneficioComponent, BeneficioActivoComponent, BeneficioInactivoComponent, TipoBeneficioComponent, TipoBeneficioInactivoComponent],
  providers: [TipoBeneficioService,PersonaService, BeneficioService,CatalogoService, AlertasService, ObservableService]
})
export class BeneficioMedicoModule { }
