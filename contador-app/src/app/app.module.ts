// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { SumarComponent } from './components/sumar/sumar.component';
import { RestarComponent } from './components/restar/restar.component';
import { ReiniciarComponent } from './components/reiniciar/reiniciar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    SumarComponent,
    RestarComponent,
    ReiniciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
