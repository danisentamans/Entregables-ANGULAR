// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { RestarComponent } from './components/restar/restar.component';
import { ReiniciarComponent } from './components/reiniciar/reiniciar.component';

const routes: Routes = [
  { path: '', component: ContadorComponent },
  { path: 'sumar', component: SumarComponent },
  { path: 'restar', component: RestarComponent },
  { path: 'reiniciar', component: ReiniciarComponent },
  // Asegurarse de que cualquier ruta desconocida redirija a la raíz (contador)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
