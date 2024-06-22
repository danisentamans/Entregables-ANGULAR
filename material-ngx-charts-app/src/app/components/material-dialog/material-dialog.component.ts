import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content.component';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent {
  formData: any = null;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.formData = result;
      }
    });
  }
}
