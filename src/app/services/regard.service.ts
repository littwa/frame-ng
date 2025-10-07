import { Injectable, signal } from '@angular/core';
import { RegardApiService } from 'src/app/services/regard-api.service';

@Injectable({
  providedIn: 'root',
})
export class RegardService extends RegardApiService {
  qualifyTextData = signal(null);
  constructor() {
    super();
  }
}
