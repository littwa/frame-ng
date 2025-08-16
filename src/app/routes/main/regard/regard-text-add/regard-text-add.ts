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
import { debounceTime, delay, distinctUntilChanged, Observable, Subject, switchMap, takeUntil, takeWhile, tap } from 'rxjs';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {
  addRegardFoundTextRequest,
  addRegardFoundTextSuccess,
  addRegardTextRequest,
  addRegardTextSuccess,
  updateRegardTextSuccess,
} from 'src/app/store/regard/regard.actions';
import { ERegardTextType } from 'src/app/enums/regard.enum';
import { MatIcon } from '@angular/material/icon';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { prepareFormData } from 'src/app/utilities/common.utility';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TextItemInfo } from 'src/app/routes/main/regard/text-item-info/text-item-info';
import { RegardService } from 'src/app/services/regard.service';
import { IRegardTextItem } from 'src/app/interfaces/regard.interfaces';
import { AsyncPipe } from '@angular/common';

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
    TextItemInfo,
    AsyncPipe,
  ],
  templateUrl: './regard-text-add.html',
  styleUrl: './regard-text-add.scss',
})
export class RegardTextAdd implements OnInit, OnDestroy {
  regardService = inject(RegardService);
  types = Object.values(ERegardTextType);
  form: FormGroup;
  store = inject(Store);
  router = inject(Router);
  unsubscribe$ = new Subject<void>();
  loader$: Observable<boolean> = this.store.select(selectGeneralLoader);
  fb = inject(FormBuilder);
  actions$ = inject(Actions);
  dialogRef = inject(MatDialogRef<RegardTextAdd>);
  ava: string;
  isHideFound = true;
  found$: Observable<IRegardTextItem[]>;
  choice: IRegardTextItem;
  data = inject(MAT_DIALOG_DATA);
  @ViewChild('imgPreview') imgPreview: ElementRef;
  @ViewChild('fileInput') fileInputRef: ElementRef;

  ngOnInit(): void {
    this.initForm();
    this.initTextFound();
    this.actions$
      .pipe(ofType(addRegardTextSuccess, updateRegardTextSuccess, addRegardFoundTextSuccess), takeUntil(this.unsubscribe$))
      .subscribe(v => this.dialogRef.close());
  }

  initForm() {
    this.form = this.fb.group({
      content: [null, [Validators.required, Validators.minLength(2)]],
      translation: this.fb.array([[null, [Validators.required, Validators.minLength(2)]]]), // Array
      synonyms: this.fb.array([[null, Validators.minLength(2)]]), // Array, IsOptional
      type: [ERegardTextType.Word, []], // Array, IsOptional, ERegardTextType
      files: [null],
    });
  }

  initTextFound(): void {
    this.found$ = this.form.controls.content.valueChanges.pipe(
      tap(v => console.log(11, this.form)),
      distinctUntilChanged(),
      // tap(v => console.log(!this.form.disabled)),
      // takeWhile(v => !this.form.disabled),
      tap(() => (this.isHideFound = true)),
      debounceTime(600),
      filter(v => v?.length > 1),
      switchMap(content => this.regardService.findTexts(content)),
      tap(res => res?.length && (this.isHideFound = false)),
    );
  }

  handlerChoice(item: IRegardTextItem) {
    this.choice = item;
    this.form.disable({ emitEvent: false });
    // Object.keys(this.form.controls).forEach(key => this.form.controls[key].disable({ emitEvent: false }));

    this.form.patchValue({
      content: item.content,
      translation: item.translation,
      synonyms: item.synonyms,
      type: item.type,
    });
    this.ava = item.img;

    this.initTextFound();

    this.isHideFound = true;
  }

  handlerClear() {
    this.isHideFound = true;
  }

  get translation(): FormArray {
    return this.form.controls['translation'] as FormArray;
  }

  addTranslation() {
    (<FormArray>this.form.controls['translation']).push(
      new FormControl(null, [Validators.required, Validators.minLength(2)]),
    );
  }

  removeTranslation(i: number) {
    this.translation.removeAt(i);
  }

  get synonyms(): FormArray {
    return this.form.controls['synonyms'] as FormArray;
  }

  addSynonyms() {
    (<FormArray>this.form.controls['synonyms']).push(new FormControl(null, [Validators.required, Validators.minLength(2)]));
  }

  removeSynonyms(i: number) {
    this.synonyms.removeAt(i);
  }

  handleSubmitText() {
    // const filtered = { ...this.form.value };
    // if (!filtered.synonyms[0]) {
    //   delete filtered.synonyms;
    // }
    const filtered = !this.form.value.synonyms[0] ? (({ synonyms, ...rest }) => rest)(this.form.value) : this.form.value;

    const formData = prepareFormData(filtered);
    const id = this.router.lastSuccessfulNavigation.finalUrl.root.children.primary.segments[2].path;

    if (this.form.enabled) return this.store.dispatch(addRegardTextRequest({ payload: formData, id }));
    this.store.dispatch(addRegardFoundTextRequest({ payload: { textId: this.choice._id, regardId: id } }));
  }

  handleReset() {
    this.form.enable({ emitEvent: false });
    this.form.reset({ emitEvent: false });
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
