import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario.component';
import { FormularioModule } from './formulario.module';

const routes: Routes = [
  { path: '', component: FormularioComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormularioModule
  ],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
