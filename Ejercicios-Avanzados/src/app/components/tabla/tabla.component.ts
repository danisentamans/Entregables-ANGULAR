import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'] // Nota: es styleUrls, no styleUrl
})
export class TablaComponent {
  items = Array.from({ length: 15 }, (_, i) => ({
    col1: `Data ${i + 1} - 1`,
    col2: `Data ${i + 1} - 2`,
    col3: `Data ${i + 1} - 3`,
    col4: `Data ${i + 1} - 4`,
    col5: `Data ${i + 1} - 5`,
    col6: `Data ${i + 1} - 6`
  }));

  isHeaderHighlighted = false;
  showFirstColumn = true;
  showSecondColumn = true;

  toggleHeaderStyle() {
    this.isHeaderHighlighted = !this.isHeaderHighlighted;
  }

  toggleColumns() {
    this.showFirstColumn = !this.showFirstColumn;
    this.showSecondColumn = !this.showSecondColumn;
  }
}
