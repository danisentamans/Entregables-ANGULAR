import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaModule } from './lista/lista.module';
import { ContadorComponent } from './contador/contador.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
