// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDialogComponent } from './components/material-dialog/material-dialog.component';
import { NgxChartsComponent } from './components/ngx-charts/ngx-charts.component';

const routes: Routes = [
  { path: 'material-dialog', component: MaterialDialogComponent },
  { path: 'ngx-charts', component: NgxChartsComponent },
  { path: '', redirectTo: '/material-dialog', pathMatch: 'full' }, // Redirige a 'material-dialog' por defecto
  { path: '**', redirectTo: '/material-dialog' } // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
