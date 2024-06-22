// src/app/app.component.ts

import { Component } from '@angular/core';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public contadorService: ContadorService) {}
}
