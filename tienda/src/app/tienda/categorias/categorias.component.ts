// src/app/tienda/categorias/categorias.component.ts

import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categorias: string[] = [];

  constructor(private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.tiendaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }
}
