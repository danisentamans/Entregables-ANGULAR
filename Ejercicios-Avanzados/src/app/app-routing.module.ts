import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'tabla', loadChildren: () => import('./components/tabla/tabla-routing.module').then(m => m.TablaRoutingModule) },
  { path: 'formulario', loadChildren: () => import('./components/formulario/formulario-routing.module').then(m => m.FormularioRoutingModule)}
  // { path: 'fourth-component', component: FourthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
