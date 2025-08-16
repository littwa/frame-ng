import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { MatButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-regard-qualify-create',
  imports: [FormsModule, LetDirective, ReactiveFormsModule, MatButton, MatDialogActions, MatDialogClose, MatProgressSpinner],
  templateUrl: './regard-qualify-create.html',
  styleUrl: './regard-qualify-create.scss',
})
export class RegardQualifyCreate implements OnInit {
  router = inject(Router);
  fb = inject(FormBuilder);
  store = inject(Store);
  form: FormGroup;
  loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  ngOnInit() {
    this.initForm();
    const id = this.router.lastSuccessfulNavigation.finalUrl.root.children.primary.segments[2].path;
    console.log(111, id);
    // type, regard, repeat, answersVariant
  }

  initForm() {
    this.form = this.fb.group({
      type: [null, [Validators.required]],
      regard: [null, [Validators.required]],
      repeat: [null, [Validators.required]],
      answersVariant: [null, [Validators.required]],
    });
  }

  submit() {}
}
