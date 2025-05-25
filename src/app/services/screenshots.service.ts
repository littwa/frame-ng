import { Injectable } from '@angular/core';
import { ScreenshotsApiService } from './screenshots-api.service';

@Injectable({
  providedIn: 'root',
})
export class ScreenshotsService extends ScreenshotsApiService {
  constructor() {
    super();
  }
}
