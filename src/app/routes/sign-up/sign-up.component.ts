import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Store } from '@ngrx/store';
import { authSignUpUserRequest } from 'src/app/store/auth/auth.actions';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatFormFieldModule, MatButtonModule, RouterLink, MatInput, MatInputModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  @ViewChild('formDirective') formDirective!: FormGroupDirective;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initForm();
    // this.form.valueChanges.subscribe(v=>console.log(this.form))
  }

  private initForm(): void {
    this.form = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('customer'),
    });
  }

  private resetForm(formDirective: FormGroupDirective): void {
    formDirective.resetForm(); // For reset validators
    this.form.reset({
      password: '',
      email: '',
      repeatPassword: '',
      role: 'customer',
    });
  }

  submit(formDirective: FormGroupDirective) {
    const preparePayload = ({ repeatPassword, ...rest }) => rest;
    const payload: any = preparePayload(this.form.value);
    console.log(this.form, payload);
    this.store.dispatch(authSignUpUserRequest({ payload }));
    this.resetForm(formDirective);
  }
}
