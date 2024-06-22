import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario.component';

@NgModule({
  declarations: [FormularioComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormularioComponent]
})
export class FormularioModule { }
