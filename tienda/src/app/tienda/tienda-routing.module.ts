// src/app/tienda/tienda-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component: CategoriasComponent },
  { path: 'categoria/:id', component: ProductosListaComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
