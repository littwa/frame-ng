import { Component, ElementRef, inject, input, InputSignal, OnInit, viewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRegardTextItem } from 'src/app/interfaces/regard.interfaces';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ModalContainerComponent } from 'src/app/components/modal-container/modal-container.component';
import { MatDialog } from '@angular/material/dialog';
import { RegardTextUpdate } from 'src/app/routes/main/regard/regard-text-update/regard-text-update';
import { ModalConfirmation } from 'src/app/components/modal-confirmation/modal-confirmation';
import { Store } from '@ngrx/store';
import { delTextFromRegardRequest } from 'src/app/store/regard/regard.actions';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-text-item',
  imports: [MatIcon, MatMenu, MatMenuItem, MatMenuTrigger, DatePipe],
  templateUrl: './text-item.html',
  styleUrl: './text-item.scss',
})
export class TextItem implements OnInit {
  data: InputSignal<IRegardTextItem> = input();
  audioBtn = viewChild<ElementRef>('audioBtn');
  icon: 'audiotrack' | 'play_circle_outline' | 'not_interested';
  dialog = inject(MatDialog);
  store = inject(Store);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.icon = this.data().pronunciation ? 'play_circle_outline' : 'not_interested';
    console.log(this.data());
  }

  handlerEditTxt() {
    this.dialog.open(ModalContainerComponent, {
      data: {
        content: { name: 'Update Text', text: this.data() },
        template: RegardTextUpdate,
      },
      height: 'calc(100vh - 96px)',
      maxWidth: '100vw',
      minWidth: '100vw',
      panelClass: 'reg-custom-container',
    });
  }

  playAudio() {
    if (!this.data().pronunciation) return;
    const audio = new Audio();
    audio.src = this.data().pronunciation;
    audio.load(); // Optional: Preload the audio
    audio.play().then(v => (this.icon = 'audiotrack'));
    audio.onended = () => (this.icon = 'play_circle_outline');
  }

  handlerDelTxt() {
    const dialogRef = this.dialog.open(ModalConfirmation, { data: { text: 'Are you sure to delete this item?' } });
    const payload = { textId: this.data()._id, regardId: this.activatedRoute.snapshot.params.id };
    dialogRef.afterClosed().subscribe(ok => ok && this.store.dispatch(delTextFromRegardRequest({ payload })));
  }

  handlerMarkAsFinishTxt() {}

  handlerResetTxt() {}

  handlerAddToFavorite() {}
}
