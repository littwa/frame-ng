import { Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatInput } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { addRegardListRequest, addRegardListSuccess, addRegardTextRequest } from 'src/app/store/regard/regard.actions';
import { ERegardTextType } from 'src/app/enums/regard.enum';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { prepareFormData } from 'src/app/utilities/common.utility';
import { ActivatedRoute, Router } from '@angular/router';

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
    MatIcon,
    MatIconButton,
    MatRadioGroup,
    MatRadioButton,
  ],
  templateUrl: './regard-text-add.html',
  styleUrl: './regard-text-add.scss',
})
export class RegardTextAdd implements OnInit, OnDestroy {
  types = Object.values(ERegardTextType);
  form: FormGroup;
  store = inject(Store);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  unsubscribe$ = new Subject<void>();
  loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  fb = inject(FormBuilder);
  actions$ = inject(Actions);
  dialogRef = inject(MatDialogRef<RegardTextAdd>);
  ava: string;
  data = inject(MAT_DIALOG_DATA);
  @ViewChild('imgPreview') imgPreview: ElementRef;
  @ViewChild('fileInput') fileInputRef: ElementRef;

  ngOnInit(): void {
    this.initForm();
    // this.actions$.pipe(ofType(addRegardListSuccess...), takeUntil(this.unsubscribe$)).subscribe(v => this.dialogRef.close());
  }

  initForm() {
    this.form = this.fb.group({
      content: [null, [Validators.required, Validators.minLength(2)]],
      translation: this.fb.array([['', [Validators.required, Validators.minLength(2)]]]), // Array
      synonyms: this.fb.array([['', Validators.minLength(2)]]), // Array, IsOptional
      type: [ERegardTextType.Word, []], // Array, IsOptional, ERegardTextType
      files: [null],
    });
  }

  get translation(): FormArray {
    return this.form.controls['translation'] as FormArray;
  }

  addTranslation() {
    (<FormArray>this.form.controls['translation']).push(new FormControl('', [Validators.required, Validators.minLength(2)]));
  }

  removeTranslation(i: number) {
    this.translation.removeAt(i);
  }

  get synonyms(): FormArray {
    return this.form.controls['synonyms'] as FormArray;
  }

  addSynonyms() {
    (<FormArray>this.form.controls['synonyms']).push(new FormControl('', [Validators.required, Validators.minLength(2)]));
  }

  removeSynonyms(i: number) {
    this.synonyms.removeAt(i);
  }

  handleSubmitText() {
    const formData = prepareFormData(this.form.value);
    console.log(1100006, this.router, this.activatedRoute);
    console.log(1100005, formData);
    // currentUrlTree root children primary segments
    // /regard/list/
    console.log(6000, this.router.url.split('/')[3]);
    // console.log(6666, this.router.);
    console.log(999, this.router.parseUrl(this.router.url));
    console.log(999, this.router.serializeUrl(this.router.parseUrl(this.router.url)));
    console.log(111, this.router.lastSuccessfulNavigation);
    console.log(222, this.router.lastSuccessfulNavigation.finalUrl.root.children.primary.segments);

    const id = this.router.lastSuccessfulNavigation.finalUrl.root.children.primary.segments[2].path;
    console.log(333, id);

    this.store.dispatch(addRegardTextRequest({ payload: formData, id }));
  }

  onFileSelected(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    // reader.readAsArrayBuffer(e.target);
    // console.log('createObjectURL ', URL.createObjectURL(e.target.files[0])) // analog url for src

    reader.onload = (eventReader: any) => {
      console.log(44444, this.imgPreview);
      this.ava = eventReader.target.result;
      // this.imgPreview.nativeElement.src = eventReader.target.result;
    };

    console.log(555, this.imgPreview, this.form.controls);

    this.form.controls.files.setValue(e.target.files);
    this.form.markAsDirty();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
