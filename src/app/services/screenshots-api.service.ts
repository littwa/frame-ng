import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { EndPoint } from '../constants/and-points.api';

@Injectable({
  providedIn: 'root',
})
export class ScreenshotsApiService {
  http = inject(HttpClient);
  constructor() {}

  createList(body: any): Observable<any> {
    return this.http.post<any>(`${env.urlApi}${EndPoint.screenshot.addList}`, body);
  }
  delList(id: string): Observable<any> {
    return this.http.delete<any>(`${env.urlApi}${EndPoint.screenshot.delList}/${id}`);
  }

  getLists(): Observable<any> {
    return this.http.get(`${env.urlApi}${EndPoint.screenshot.getLists}`);
  }

  createScreenshots(body: any, id: string): Observable<any> {
    return this.http.post<any>(`${env.urlApi}${EndPoint.screenshot.add}/${id}`, body);
  }

  getList(id: string): Observable<any> {
    return this.http.get(`${env.urlApi}${EndPoint.screenshot.get}/${id}`);
  }
}
