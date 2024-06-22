// src/main.ts

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    importProvidersFrom(HttpClientModule),
  ],
}).catch(err => console.error(err));
