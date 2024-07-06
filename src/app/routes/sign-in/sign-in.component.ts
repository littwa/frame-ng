import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authSignInUserRequest } from 'src/app/store/auth/auth.actions';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent implements OnInit {
  urlApi = environment.urlApi;
  form!: FormGroup;
  @ViewChild('formDirective') formDirective!: FormGroupDirective;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initForm();
    // this.form.valueChanges.subscribe(v=>console.log(this.form))
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  private resetForm(): void {
    this.formDirective.resetForm(); // For reset validators
    this.form.reset({
      password: '',
      email: '',
    });
  }

  submit() {
    this.store.dispatch(authSignInUserRequest({ payload: this.form.value }));
    this.resetForm();
  }
}
