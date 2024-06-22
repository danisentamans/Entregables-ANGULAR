import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { ContadorComponent } from './contador/contador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ListaComponent,
    ContadorComponent,
    FormularioComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi-proyecto';
}
