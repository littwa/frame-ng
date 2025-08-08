import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RegardTextAdd } from 'src/app/routes/main/regard/regard-text-add/regard-text-add';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LetDirective } from '@ngrx/component';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ERegardTextType } from '../../../../enums/regard.enum';
import { prepareFormData } from '../../../../utilities/common.utility';
import { addRegardTextRequest } from '../../../../store/regard/regard.actions';

@Component({
  selector: 'app-regard-text-update',
  imports: [
    FormsModule,
    LetDirective,
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatProgressSpinner,
    MatRadioButton,
    MatRadioGroup,
    ReactiveFormsModule,
  ],
  templateUrl: './regard-text-update.html',
  styleUrl: './regard-text-update.scss',
})
export class RegardTextUpdate extends RegardTextAdd implements OnInit, OnDestroy {
  override dialogRef = inject(MatDialogRef<RegardTextUpdate>);
  override handleSubmitText() {
    // super.handleSubmitText();
    const formData = prepareFormData(this.form.value);
    const id = this.router.lastSuccessfulNavigation.finalUrl.root.children.primary.segments[2].path;
    console.log(333, id);

    // this.store.dispatch(addRegardTextRequest({ payload: formData, id }));
  }

  override initForm() {
    console.log(1000001, this.dialogRef, this.data);
    this.form = this.fb.group({
      content: [this.data.content.text.content, [Validators.required, Validators.minLength(2)]],
      translation: this.fb.array([
        ...this.data.content.text.translation.map((v: string) => [v, [Validators.required, Validators.minLength(2)]]),
      ]), // Array
      synonyms: this.fb.array([
        ...this.data.content.text.synonyms.map((v: string) => [v, [Validators.required, Validators.minLength(2)]]),
      ]), // Array, IsOptional
      type: [this.data.content.text.type, []], // Array, IsOptional, ERegardTextType
      files: [null],
    });

    this.ava = this.data.content.text.img;
  }
}
