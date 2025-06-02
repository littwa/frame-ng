import { Component, inject, OnInit } from '@angular/core';
import { IScreenshotsList } from 'src/app/interfaces/screenshots.interfaces';
import { Store } from '@ngrx/store';
import { createScreenshotsRequest, getScreenshotsListRequest } from 'src/app/store/screenshots/screenshots.actions';
import { selectScreenshotsList } from 'src/app/store/screenshots/screenshots.selectors';
import { ActivatedRoute } from '@angular/router';
import { ScreenshotsItemComponent } from '../screenshots-item/screenshots-item.component';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { selectGeneralLoader } from 'src/app/store/loader/loader.selectors';

@Component({
  selector: 'app-screenshots-list',
  imports: [ScreenshotsItemComponent, MatButtonModule, JsonPipe, AsyncPipe],
  templateUrl: './screenshots-list.component.html',
  styleUrl: './screenshots-list.component.scss',
})
export class ScreenshotsListComponent implements OnInit {
  data: IScreenshotsList;
  activatedRoute = inject(ActivatedRoute);
  store = inject(Store);
  loader$ = this.store.select(selectGeneralLoader);
  selectedFiles: any;

  ngOnInit() {
    this.store.dispatch(getScreenshotsListRequest({ payload: null, id: this.activatedRoute.snapshot.params.id }));
    this.store.select(selectScreenshotsList).subscribe(v => {
      this.data = v;
    });
  }

  handleAddScreenshots(e: any) {
    this.selectedFiles = e.target.files;
  }

  handleUpload() {
    const formData = new FormData();

    if (this.selectedFiles) {
      for (const file of this.selectedFiles) {
        formData.append(file.name, file);
      }
    }

    this.store.dispatch(createScreenshotsRequest({ payload: formData, id: this.activatedRoute.snapshot.params.id }));
  }
}
