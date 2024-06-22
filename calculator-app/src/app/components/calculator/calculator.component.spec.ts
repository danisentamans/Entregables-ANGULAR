import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería tener valores iniciales de num1, num2 y result como 0', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.result).toBe(0);
    const num1Input = fixture.nativeElement.querySelector('input[placeholder="Enter first number"]');
    const num2Input = fixture.nativeElement.querySelector('input[placeholder="Enter second number"]');
    const resultText = fixture.nativeElement.querySelector('.result h2').textContent;
    expect(num1Input.value).toBe('0');
    expect(num2Input.value).toBe('0');
    expect(resultText).toContain('Resultado: 0');
  });

  it('debería sumar dos números', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.sum();
    fixture.detectChanges();
    expect(component.result).toBe(8);
    const resultText = fixture.nativeElement.querySelector('.result h2').textContent;
    expect(resultText).toContain('Resultado: 8');
  });

  it('debería restar dos números', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.subtract();
    fixture.detectChanges();
    expect(component.result).toBe(2);
    const resultText = fixture.nativeElement.querySelector('.result h2').textContent;
    expect(resultText).toContain('Resultado: 2');
  });

  it('debería multiplicar dos números', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.multiply();
    fixture.detectChanges();
    expect(component.result).toBe(15);
    const resultText = fixture.nativeElement.querySelector('.result h2').textContent;
    expect(resultText).toContain('Resultado: 15');
  });
});
