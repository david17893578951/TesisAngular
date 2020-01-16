import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntecedenteMedicoComponent } from './antecedente-medico.component';
import { antecedentemedicoRouting } from "app/antecedente-medico/antecedente-medico.routing";
import { DatoPersonaModule } from "app/dato-persona/dato-persona.module";
import { ObservableService, AlertasService } from "app/core/service";
import { CatalogoService, PersonaService, PacienteService, SriService } from "app/providers";
import { SmartadminModule } from "app/shared/smartadmin.module";
import { SmartadminDatatableModule } from "app/shared/ui/datatable/smartadmin-datatable.module";
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { CabeceraAntecedenteMedicoComponent } from './cabecera-antecedente-medico/cabecera-antecedente-medico.component';
import { MenuAntecedenteComponent } from './menu-antecedente/menu-antecedente.component';
import { AntecedentePatologicoComponent } from './antecedentes/antecedente-patologico/antecedente-patologico.component';

@NgModule({
  imports: [
    CommonModule,
    antecedentemedicoRouting,
    SmartadminModule,
    SmartadminDatatableModule,
    DatoPersonaModule
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [AntecedenteMedicoComponent, NuevoPacienteComponent, CabeceraAntecedenteMedicoComponent, MenuAntecedenteComponent, AntecedentePatologicoComponent],
  providers: [PersonaService, CatalogoService, PacienteService, AlertasService, ObservableService,SriService]
})
export class AntecedenteMedicoModule { }
