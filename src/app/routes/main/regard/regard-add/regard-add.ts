import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatInput } from '@angular/material/input';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import {
  createScreenshotsListRequest,
  createScreenshotsListSuccess,
} from '../../../../store/screenshots/screenshots.actions';
import { addRegardListRequest, addRegardListSuccess } from '../../../../store/regard/regard.actions';

@Component({
  selector: 'app-regard-add',
  imports: [
    FormsModule,
    LetDirective,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatFormField,
    MatInput,
    MatProgressSpinner,
    ReactiveFormsModule,
    MatFormField,
    MatProgressSpinner,
  ],
  templateUrl: './regard-add.html',
  styleUrl: './regard-add.scss',
})
export class RegardAdd implements OnDestroy {
  public form: FormGroup;
  private store = inject(Store);
  private unsubscribe$ = new Subject<void>();
  public loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  private fb = inject(FormBuilder);
  private actions$ = inject(Actions);
  public dialogRef = inject(MatDialogRef<RegardAdd>);

  ngOnInit(): void {
    this.initForm();

    this.actions$.pipe(ofType(addRegardListSuccess), takeUntil(this.unsubscribe$)).subscribe(v => this.dialogRef.close());
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
    });
  }

  handleAdd() {
    console.log(this.form.value);
    this.store.dispatch(addRegardListRequest({ payload: this.form.value }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
