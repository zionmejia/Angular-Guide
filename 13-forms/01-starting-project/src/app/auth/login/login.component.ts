import {afterNextRender, Component, DestroyRef, inject, viewChild} from '@angular/core';
import {FormGroup, FormsModule, NgForm} from "@angular/forms";
import {debounceTime, timeout} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  public form = viewChild.required<NgForm>('form');
  public destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem("login-form-email");

      if (savedForm) {
        try {
          const loadedFormData = JSON.parse(savedForm);
          const savedEmail = loadedFormData.email;
          this.form().controls['email'].setValue(savedEmail);
        } catch (e) {
          console.warn('Invalid saved form in localStorage:', savedForm);
          // optionally remove the invalid value
          window.localStorage.removeItem("login-form-email");
        }

        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1)
      }
      // @ts-ignore
      const subscription = this.form()?.valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value: any) =>
          window.localStorage.setItem('login-form-email', JSON.stringify({email: value.email})
        ),
      })
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  public onSubmit(formData: NgForm) {
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    if (formData.form.invalid) {
      console.log("failed");
      return;
    }

    console.log(formData.form.valid);
    formData.reset();
  }

}
