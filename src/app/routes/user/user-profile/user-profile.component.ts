import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { getUser } from 'src/app/store/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { MatInput } from '@angular/material/input';
import { authUpdateUserRequest } from '../../../store/auth/auth.actions';
import { UnixPipe } from '../../../pipes/unix.pipe';
import { CustomDateValidators } from 'src/app/validators/custom-date.validator';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatButton,
    MatFormFieldModule,
    MatInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatDatepickerInput,
  ],
  providers: [UnixPipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  form!: FormGroup;
  // store: Store = inject(Store);

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private unixPipe: UnixPipe,
  ) {}

  ngOnInit(): void {
    // this.form = this.fb.group({ name: 'fgfg' });
    // this.renderer.addClass(this.el.nativeElement, 'acc');

    // this.activatedRoute.data.subscribe(v => v);
    this.store.select(getUser).subscribe(user => {
      console.log(3, user);
      this.initForm(user);
    });
  }

  initForm(user: any) {
    this.form = this.fb.group({
      firstName: [user.firstName],
      lastName: [user.lastName],
      dateCreated: [
        {
          value: new Date(Number(user.dateCreated || 0)).toLocaleDateString('fr-FR'),
          disabled: true,
        },
        // [CustomDateValidators.dateMMDDYYYY],
      ],
      dayOfBirth: [user.dayOfBirth], // , [CustomDateValidators.dateYYYYMMDD]
      country: [user.country],
      city: [user.city],
      username: [user.username],
      occupation: [user.occupation],
      hobby: [user.hobby],
      avatarURL: [user.avatarURL],
    });
  }

  submit() {
    const ff: Date = new Date();
    console.log(11, new Date(this.form.value.dayOfBirth.toLocaleDateString('en-CA')));
    console.log(11, this.form.value.dayOfBirth && this.form.value.dayOfBirth.toLocaleDateString('en-CA'));
    // this.store.dispatch(authUpdateUserRequest({payload: this.form.value}));
    // ;
  }

  onFileSelected($event: Event) {}

  reset() {}
}
