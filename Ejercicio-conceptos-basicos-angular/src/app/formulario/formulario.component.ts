import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  usuarios: any[] = [];
  usuario = {
    nombre: '',
    apellido: '',
    telefono: '',
    fechaNacimiento: ''
  };

  agregarUsuario() {
    this.usuarios.push({ ...this.usuario });
    this.usuario = {
      nombre: '',
      apellido: '',
      telefono: '',
      fechaNacimiento: ''
    };
  }
}
