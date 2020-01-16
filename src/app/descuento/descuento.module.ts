import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescuentoComponent } from './descuento.component';
import { descuentoRouting } from "app/descuento/descuento.routing";
import { SmartadminModule } from "app/shared/smartadmin.module";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { TipoDescuentoComponent } from './tipo-descuento/tipo-descuento.component';
import { DatoPersonaModule } from "app/dato-persona/dato-persona.module";
import { MenuDescuentoComponent } from './tipo-descuento/menu-descuento/menu-descuento.component';
import { DescuentoActivoComponent } from './tipo-descuento/descuento-activo/descuento-activo.component';
import { DescuentoInactivoComponent } from './tipo-descuento/descuento-inactivo/descuento-inactivo.component';
import { DescuentoService } from "app/descuento/services";
import { AlertasService, ObservableService } from "app/core/service";
import { PersonaService, CatalogoService } from "app/providers";
import { SmartadminValidationModule } from "app/shared/forms/validation/smartadmin-validation.module";

@NgModule({
  imports: [
    CommonModule,
    descuentoRouting,   
    SmartadminModule,
    SmartadminDatatableModule,
    SmartadminValidationModule,
    DatoPersonaModule,
    
  ],
      schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [MenuDescuentoComponent,DescuentoInactivoComponent,DescuentoActivoComponent,DescuentoComponent, TipoDescuentoComponent],
   providers: [PersonaService,DescuentoService,CatalogoService, AlertasService, ObservableService]
})
export class DescuentoModule { }
