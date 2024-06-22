import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  items: string[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
