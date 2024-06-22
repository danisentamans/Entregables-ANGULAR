import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  form = new FormGroup({
    name: new FormControl('John', Validators.required),
    surname: new FormControl('Doe', Validators.required),
    phone: new FormControl('123456789', [Validators.required, Validators.pattern(/^\d{9}$/)]),
    birthdate: new FormControl('1990-01-01', Validators.required),
    address: new FormControl('123 Main St'),
    city: new FormControl('Springfield', Validators.required),
    country: new FormControl('USA', Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
