import { Component, inject, Input, input, InputSignal, model, ModelSignal, OnInit } from '@angular/core';
import { IScreenshot, IScreenshotsList } from 'src/app/interfaces/screenshots.interfaces';
import { Store } from '@ngrx/store';
import { getScreenshotsListRequest } from 'src/app/store/screenshots/screenshots.actions';
import { selectScreenshotsList } from 'src/app/store/screenshots/screenshots.selectors';
import { ActivatedRoute } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { ScreenshotsItemComponent } from '../screenshots-item/screenshots-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-screenshots-list',
  imports: [NgIf, ScreenshotsItemComponent, NgForOf, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './screenshots-list.component.html',
  styleUrl: './screenshots-list.component.scss',
})
export class ScreenshotsListComponent implements OnInit {
  // @Input() data: any;
  // data: InputSignal<IScreenshotsList> = input();
  // data: ModelSignal<IScreenshotsList> = model();
  data: IScreenshotsList;
  activatedRoute = inject(ActivatedRoute);
  store = inject(Store);

  ngOnInit() {
    this.store.dispatch(getScreenshotsListRequest({ payload: null, id: this.activatedRoute.snapshot.params.id }));
    this.store.select(selectScreenshotsList).subscribe(v => {
      console.log(100005, v?.screenshots);
      this.data = v;
    });
  }
}
