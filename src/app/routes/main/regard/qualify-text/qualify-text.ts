import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  InputSignal,
  model,
  OnInit,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AsyncPipe, JsonPipe, NgTemplateOutlet } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
  checkQualifyRequest,
  checkQualifySuccess,
  markTextFinishQualifyRequest,
  resetTextQualifyRequest,
} from 'src/app/store/regard/regard.actions';
import { ActivatedRoute } from '@angular/router';
import { PieChart } from 'src/app/components/pie-chart/pie-chart';
import { PiePipe } from 'src/app/pipes/pie-pipe';
import { Observable } from 'rxjs';
import { selectQualify } from 'src/app/store/regard/regard.selectors';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { IQualifyItemizedText, IRegardQualifyTextIds } from 'src/app/interfaces/regard.interfaces';
import { Actions, ofType } from '@ngrx/effects';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { RegardService } from '../../../../services/regard.service';

@Component({
  selector: 'app-qualify-text',
  imports: [MatButton, MatIcon, PieChart, PiePipe, AsyncPipe, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressSpinner],
  templateUrl: './qualify-text.html',
  styleUrl: './qualify-text.scss',
})
export class QualifyText implements OnInit {
  regardService = inject(RegardService);
  flag = model.required<boolean>(); // for example, does not affect to logic
  btnSwitcher = false;
  showSynonyms = false;
  showTranslation = false;
  next = output();
  store = inject(Store);
  actions$ = inject(Actions);
  activatedRouter = inject(ActivatedRoute);
  icon: 'audiotrack' | 'play_circle_outline' | 'not_interested';
  ids: IRegardQualifyTextIds;
  data: InputSignal<IQualifyItemizedText> = input(null, {
    transform: v => {
      this.icon = v?.text.pronunciation ? 'play_circle_outline' : 'not_interested';
      this.regardService.currentTextData.set(v.text);
      console.log(100009, v);
      return v;
    },
  });
  qualify$: Observable<any> = this.store.select(selectQualify);
  loader$: Observable<any> = this.store.select(selectGeneralLoader);

  ngOnInit() {
    this.initIds();
    console.log(55, this.data());
    this.actions$.pipe(ofType(checkQualifySuccess)).subscribe(v => (this.btnSwitcher = true));
  }

  initIds() {
    this.ids = {
      qualifyId: this.activatedRouter.snapshot.params.idq,
      regardId: this.activatedRouter.snapshot.params.id,
      textId: this.data().text._id,
    };
  }

  playAudio() {
    // this.data.set()
    if (!this.data().text.pronunciation) return;
    const audio = new Audio();
    audio.src = this.data().text.pronunciation;
    audio.load(); // Optional: Preload the audio
    audio.play().then(v => (this.icon = 'audiotrack'));
    audio.onended = () => (this.icon = 'play_circle_outline');
  }

  handleCheck() {
    this.flag.set(true); // for example, does not affect to logic
    this.playAudio();
    this.showSynonyms = true;
    this.showTranslation = true;
    const { id: regardId, idq: qualifyId } = this.activatedRouter.snapshot.params;
    const textId = this.data().text._id;
    console.log(10005, textId, regardId, qualifyId);
    this.store.dispatch(checkQualifyRequest({ payload: { body: null, textId, regardId, qualifyId } }));
  }

  handleNext() {
    this.flag.set(false); // for example, does not affect to logic
    this.next.emit();
    this.showSynonyms = false;
    this.showTranslation = false;
    this.btnSwitcher = false;
  }

  markAsFinishQualityTextLap() {
    console.log(1004, this.ids);
    const { textId, regardId, qualifyId } = this.ids;
    this.store.dispatch(markTextFinishQualifyRequest({ payload: { textId, regardId, qualifyId } }));
  }

  resetQualityTextLap() {
    const { textId, regardId, qualifyId } = this.ids;
    this.store.dispatch(resetTextQualifyRequest({ payload: { textId, regardId, qualifyId } }));
  }

  handlerAddEssential() {}
}
