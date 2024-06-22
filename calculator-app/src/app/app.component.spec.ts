import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule], // Importante importar RouterTestingModule para las pruebas de enrutamiento
    }).compileComponents();
  });

  it('debería crear la instancia de AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Puedes agregar más pruebas según necesites
});
