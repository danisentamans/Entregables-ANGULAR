import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  reiniciar() {
    this.contador = 0;
  }
}
