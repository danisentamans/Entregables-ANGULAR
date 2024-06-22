import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDialogComponent } from './components/material-dialog/material-dialog.component';
import { DialogContentComponent } from './components/material-dialog/dialog-content.component';
import { NgxChartsComponent } from './components/ngx-charts/ngx-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDialogComponent,
    DialogContentComponent,
    NgxChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
