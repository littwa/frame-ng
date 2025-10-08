import { Injectable, signal } from '@angular/core';
import { RegardApiService } from 'src/app/services/regard-api.service';
import { IRegardTextItem } from '../interfaces/regard.interfaces';

@Injectable({
  providedIn: 'root',
})
export class RegardService extends RegardApiService {
  qualifyTextData = signal<IRegardTextItem>(null);
  // regardItemizedData = signal(null);

  constructor() {
    super();
  }
}
