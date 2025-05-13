import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { getUser } from 'src/app/store/auth/auth.selectors';
import { Store } from '@ngrx/store';
import { MatInput } from '@angular/material/input';
import { authUpdateUserRequest } from 'src/app/store/auth/auth.actions';
import { UnixPipe } from 'src/app/pipes/unix.pipe';
import { CustomDateValidators } from 'src/app/validators/custom-date.validator';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { getDirtyFormValues } from 'src/app/utilities/common.utility';
import { IStateUser } from '../../../interfaces/auth.interfaces';

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
  form: FormGroup;
  user: IStateUser;
  ava: string;
  @ViewChild('imgPreview') imgPreview: ElementRef;
  @ViewChild('fileInput') fileInputRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private unixPipe: UnixPipe,
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(v => v);
    this.store.select(getUser).subscribe(user => {
      console.log(3, user);
      this.user = user;
      this.ava = user.avatarURL;
      this.initForm(user);
      // this.form.valueChanges.subscribe(v => console.log(777, v));
      // this.changedFormValues();
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
      // avatarURL: [user.avatarURL],
      files: [null],
    });
  }

  submit() {
    // console.log(11, new Date(this.form.value.dayOfBirth?.toLocaleDateString('en-CA')));
    // console.log(11, this.form.value.dayOfBirth?.toLocaleDateString('en-CA'));
    // console.log(22, this.form.value);

    const payload = this.prepareFormData(getDirtyFormValues(this.form));
    const id = this.user._id;
    console.log(44, { payload, id });
    // console.log(55, payload.forEach(console.log));
    this.store.dispatch(authUpdateUserRequest({ payload, id }));
    this.imgPreview.nativeElement.src = '';
    this.fileInputRef.nativeElement.value = '';
    // ;
  }

  prepareFormData(formValues: any): FormData {
    const formData = new FormData();

    console.log('formValues ', formValues);

    if (formValues.files) {
      for (const file of formValues.files) {
        formData.append(file.name, file);
      }
    }

    delete formValues.files;
    Object.keys(formValues).forEach(key => {
      formData.append(key, formValues[key]);
    });

    return formData;
  }

  onFileSelected(e: any) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    // reader.readAsArrayBuffer(e.target);
    // console.log('createObjectURL ', URL.createObjectURL(e.target.files[0])) // analog url for src

    reader.onload = (eventReader: any) => {
      this.imgPreview.nativeElement.src = eventReader.target.result;
    };

    this.form.controls.files.setValue(e.target.files);
    this.form.markAsDirty();
  }

  reset() {
    this.imgPreview.nativeElement.src = '';
    this.fileInputRef.nativeElement.value = '';
  }
}
