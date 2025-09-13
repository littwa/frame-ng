import { Component, computed, effect, inject, input, InputSignal, model, OnInit, output, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { checkQualifyRequest } from 'src/app/store/regard/regard.actions';
import { ActivatedRoute } from '@angular/router';
import { PieChart } from 'src/app/components/pie-chart/pie-chart';
import { PiePipe } from 'src/app/pipes/pie-pipe';
import { Observable } from 'rxjs';
import { selectQualify } from 'src/app/store/regard/regard.selectors';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-qualify-text',
  imports: [MatButton, JsonPipe, MatIcon, PieChart, PiePipe, AsyncPipe, MatMenu, MatMenuItem, MatMenuTrigger],
  templateUrl: './qualify-text.html',
  styleUrl: './qualify-text.scss',
})
export class QualifyText implements OnInit {
  flag = model.required<boolean>(); // for example, does not affect to logic
  showSynonyms = false;
  showTranslation = false;
  next = output();
  store = inject(Store);
  activatedRouter = inject(ActivatedRoute);
  icon: 'audiotrack' | 'play_circle_outline' | 'not_interested';
  data: InputSignal<any> = input(null, {
    transform: v => {
      this.icon = v?.text.pronunciation ? 'play_circle_outline' : 'not_interested';
      console.log(this.icon);
      console.log(54, v);
      return v;
    },
  });
  qualify$: Observable<any> = this.store.select(selectQualify);

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

  ngOnInit() {}

  handleNext() {
    this.flag.set(false); // for example, does not affect to logic
    this.next.emit();
    this.showSynonyms = false;
    this.showTranslation = false;
  }

  markAsFinishQualityTextLap() {}

  resetQualityTextLap() {}

  handlerAddEssential() {}
}
