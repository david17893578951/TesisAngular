/**
 * Created by griga on 7/11/16.
 */


import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    //data: {pageTitle: 'Home'},
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      { path: 'home', loadChildren: 'app/ModuloHome/home.module#HomeModule', data: { pageTitle: 'Inicio' } },
      { path: 'beneficiomedico', loadChildren: 'app/beneficio-medico/beneficio-medico.module#BeneficioMedicoModule', data: { pageTitle: 'Deportistas Beneficiados' } },
      { path: 'descuento', loadChildren: 'app/descuento/descuento.module#DescuentoModule', data: { pageTitle: 'Descuentos Médicos' } },
      { path: 'registrofisioterapia', loadChildren: 'app/registro-fisioterapia/registro-fisioterapia.module#RegistroFisioterapiaModule', data: { pageTitle: 'Registro Fisioterapia' } },
      { path: 'seguimientofisioterapia', loadChildren: 'app/seguimiento-fisioterapia/seguimiento-fisioterapia.module#SeguimientoFisioterapiaModule', data: { pageTitle: 'Seguimiento Fisioterapia' } },
      { path: 'seguimientopsicologico', loadChildren: 'app/seguimiento-psicologico/seguimiento-psicologico.module#SeguimientoPsicologicoModule', data: { pageTitle: 'Seguimiento Psicológico' } },
    ]
  },

  //{path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},

  //{path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
