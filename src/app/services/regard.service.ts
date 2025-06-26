import { Injectable } from '@angular/core';
import { RegardApiService } from 'src/app/services/regard-api.service';

@Injectable({
  providedIn: 'root',
})
export class RegardService extends RegardApiService {
  constructor() {
    super();
  }
}
