import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatInput } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { addRegardListRequest, addRegardListSuccess } from '../../../../store/regard/regard.actions';

@Component({
  selector: 'app-regard-text-add',
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
  ],
  templateUrl: './regard-text-add.html',
  styleUrl: './regard-text-add.scss',
})
export class RegardTextAdd {
  form: FormGroup;
  store = inject(Store);
  unsubscribe$ = new Subject<void>();
  loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  fb = inject(FormBuilder);
  actions$ = inject(Actions);
  dialogRef = inject(MatDialogRef<RegardTextAdd>);

  ngOnInit(): void {
    this.initForm();

    // this.actions$.pipe(ofType(addRegardListSuccess...), takeUntil(this.unsubscribe$)).subscribe(v => this.dialogRef.close());
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
    });
  }

  handleAdd() {
    console.log(this.form.value);
    // this.store.dispatch(addRegardListRequest...({ payload: this.form.value }));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
