import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importa RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule // Asegúrate de importar RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
