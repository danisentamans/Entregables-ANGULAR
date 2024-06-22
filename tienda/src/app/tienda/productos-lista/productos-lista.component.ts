// src/app/tienda/productos-lista/productos-lista.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.scss']
})
export class ProductosListaComponent implements OnInit {
  productos: any[] = [];
  categoria: string = '';

  constructor(private route: ActivatedRoute, private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('id')!;
    this.tiendaService.getProductosPorCategoria(this.categoria).subscribe(data => {
      this.productos = data;
    });
  }
}
