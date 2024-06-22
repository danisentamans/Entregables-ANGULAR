// src/app/tienda/producto-detalle/producto-detalle.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private tiendaService: TiendaService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.tiendaService.getProducto(id).subscribe(data => {
      this.producto = data;
    });
  }
}
