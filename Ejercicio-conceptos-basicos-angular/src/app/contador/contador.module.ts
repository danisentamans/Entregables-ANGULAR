import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [ContadorComponent],
  imports: [CommonModule, FormsModule],
  exports: [ContadorComponent]
})
export class ContadorModule { }
