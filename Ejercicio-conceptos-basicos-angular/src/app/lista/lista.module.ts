import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista.component';

@NgModule({
  declarations: [ListaComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListaComponent]
})
export class ListaModule { }
