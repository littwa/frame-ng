import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { EQualifyAnswers, EQualifyType, ERegardTextType } from 'src/app/enums/regard.enum';
import { MatFormField } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { createQualifyRequest, createQualifySuccess } from 'src/app/store/regard/regard.actions';
import { Actions, ofType } from '@ngrx/effects';
import { IRegardItemPopulate } from '../../../../interfaces/regard.interfaces';
import { selectRegard } from '../../../../store/regard/regard.selectors';

@Component({
  selector: 'app-regard-qualify-create',
  imports: [
    FormsModule,
    LetDirective,
    ReactiveFormsModule,
    FormsModule,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatProgressSpinner,
    MatRadioButton,
    MatRadioGroup,
    MatFormField,
    MatSelect,
    MatOption,
    MatSelectModule,
  ],
  templateUrl: './regard-qualify-create.html',
  styleUrl: './regard-qualify-create.scss',
})
export class RegardQualifyCreate implements OnInit, OnDestroy {
  qualifyType = Object.entries(EQualifyType);
  qualifyAnswers = Object.entries(EQualifyAnswers);
  unsubscribe$ = new Subject<void>();
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  store = inject(Store);
  actions$ = inject(Actions);
  dialogRef = inject(MatDialogRef<RegardQualifyCreate>);
  form: FormGroup;
  regardId = this.router.lastSuccessfulNavigation.finalUrl.root.children.primary.segments[2].path;
  loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  regard$: Observable<IRegardItemPopulate> = this.store.select(selectRegard);

  ngOnInit() {
    this.initForm();
    // const id = this.router.lastSuccessfulNavigation.finalUrl.root.children.primary.segments[2].path;
    this.actions$.pipe(ofType(createQualifySuccess), takeUntil(this.unsubscribe$)).subscribe(v => {
      console.log(900, v);
      this.router.navigate([`regard/list/${this.regardId}/qualify/${v.payload._id}`]);
      this.dialogRef.close();
    });
  }

  initForm() {
    this.form = this.fb.group({
      type: [null, [Validators.required]],
      repeat: [8, [Validators.required]],
      answersVariant: [null, [Validators.required]],
    });
  }

  submit() {
    console.log(333, this.form.value);
    this.store.dispatch(
      createQualifyRequest({
        payload: this.form.value,
        id: this.regardId,
      }),
    );
  }

  resume(regard: IRegardItemPopulate) {
    const progressQualify = regard.qualifies.find(v => !v.finished);
    this.router.navigate([`regard/list/${this.regardId}/qualify/${progressQualify._id}`]);
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
