import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatoBeneficioComponent } from './dato-beneficio.component';
import { SmartadminModule } from "app/shared/smartadmin.module";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { DatoPersonaComponent } from "app/dato-persona/dato-persona.component";
import { AlertasService, ObservableService } from "app/core/service";
import { BeneficioService, TipoBeneficioService } from "app/providers";
import { DescuentoService } from "app/descuento/services";

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    SmartadminDatatableModule,
  ],
  declarations: [DatoBeneficioComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [DatoBeneficioComponent],
  providers: [DescuentoService,TipoBeneficioService,BeneficioService, AlertasService, ObservableService]
})
export class DatoBeneficioModule { }
