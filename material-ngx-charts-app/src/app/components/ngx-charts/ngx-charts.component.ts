import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.scss']
})
export class NgxChartsComponent {
  single: any[] = [
    { name: 'Alemania', value: 40632 },
    { name: 'EEUU', value: 49737 },
    { name: 'Francia', value: 36745 },
    { name: 'Reino Unido', value: 36240 },
    { name: 'España', value: 33000 },
    { name: 'Italia', value: 35800 }
  ];

  multi: any[] = [
    {
      name: 'Alemania',
      series: [
        { name: '2010', value: 7300000 },
        { name: '2011', value: 8940000 }
      ]
    },
    {
      name: 'EEUU',
      series: [
        { name: '2010', value: 7870000 },
        { name: '2011', value: 8270000 }
      ]
    },
    {
      name: 'Francia',
      series: [
        { name: '2010', value: 5000002 },
        { name: '2011', value: 5800000 }
      ]
    }
  ];

  view: [number, number] = [700, 400];

  colorScheme: Color = {
    name: 'vivid',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'País';
  showYAxisLabel = true;
  yAxisLabel = 'Población';
}
