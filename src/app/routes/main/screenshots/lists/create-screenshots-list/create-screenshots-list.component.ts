import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { createScreenshotsListRequest, createScreenshotsListSuccess } from 'src/app/store/screenshots/screenshots.actions';

import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField } from '@angular/material/form-field';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-create-screenshots-list',
  imports: [
    FormsModule,
    MatFormField,
    ReactiveFormsModule,
    MatDialogActions,
    MatProgressSpinner,
    NgIf,
    MatDialogClose,
    MatButton,
    MatInput,
    LetDirective,
  ],
  templateUrl: './create-screenshots-list.component.html',
  styleUrl: './create-screenshots-list.component.scss',
})
export class CreateScreenshotsListComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  private unsubscribe$ = new Subject<void>();
  public loader$: Observable<boolean> = this.store.select(selectGeneralLoader);

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions,
    public dialogRef: MatDialogRef<CreateScreenshotsListComponent>,
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.actions$
      .pipe(ofType(createScreenshotsListSuccess), takeUntil(this.unsubscribe$))
      .subscribe(v => this.dialogRef.close());
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
    });
  }

  handleAdd() {
    console.log(this.form.value);
    this.store.dispatch(createScreenshotsListRequest({ payload: this.form.value }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
