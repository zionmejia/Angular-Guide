import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule]
})
export class SignupComponent {

  public form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [],
    }),
    passwords: new FormGroup({
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    }),

    firstName: new FormControl('', {}),
    lastName: new FormControl('', {}),

    address: new FormGroup({
      street: new FormControl('', {}),
      postcode: new FormControl('', {}),
      number: new FormControl('', {}),
      city: new FormControl('', {}),
    }),

    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', {}),
    agree: new FormControl(false, {validators: [Validators.required]}),
  });

  public onSubmit() {
    console.log(this.form);
  }

  public onReset() {
    this.form.reset();
  }

}
