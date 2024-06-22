// src/app/tienda/tienda.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiendaRoutingModule } from './tienda-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CategoriasComponent,
    ProductosListaComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    HttpClientModule
  ]
})
export class TiendaModule { }
