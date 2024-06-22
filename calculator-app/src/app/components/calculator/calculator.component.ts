import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  sum(): void {
    this.result = this.num1 + this.num2;
  }

  subtract(): void {
    this.result = this.num1 - this.num2;
  }

  multiply(): void {
    this.result = this.num1 * this.num2;
  }
}
