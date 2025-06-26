import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { EndPoint } from 'src/app/constants/and-points.api';

@Injectable({
  providedIn: 'root',
})
export class RegardApiService {
  http = inject(HttpClient);

  addRegard(body: any): Observable<any> {
    return this.http.post<any>(`${env.urlApi}${EndPoint.regard.add}`, body);
  }

  getRegards(): Observable<any> {
    return this.http.get<any>(`${env.urlApi}${EndPoint.regard.get}`);
  }

  getOne(id: string): Observable<any> {
    return this.http.get<any>(`${env.urlApi}${EndPoint.regard.getOne}/${id}`);
  }

  delRegard(id: string): Observable<any> {
    return this.http.delete<any>(`${env.urlApi}${EndPoint.regard.delRegard}/${id}`);
  }

  createAddText(body: any, id: string): Observable<any> {
    return this.http.post<any>(`${env.urlApi}${EndPoint.regard.createAddText}/${id}`, body);
  }

  findTexts(content: string): Observable<any> {
    return this.http.get<any>(`${env.urlApi}${EndPoint.regard.findTexts}`);
  }

  addFoundText(textId: string, regardId: string): Observable<any> {
    return this.http.get<any>(`${env.urlApi}${EndPoint.regard.addFoundText}/${textId}/${regardId}`);
  }

  updateText(body: any, id: string) {
    return this.http.patch<any>(`${env.urlApi}${EndPoint.regard.updateText}/${id}`, body);
  }

  delText(textId: string, regardId: string, qualifyId: string): Observable<any> {
    return this.http.delete<any>(`${env.urlApi}${EndPoint.regard.delText}/${textId}/${regardId}/${qualifyId}`);
  }

  createQualify(body: any, id: string): Observable<any> {
    return this.http.post<any>(`${env.urlApi}${EndPoint.regard.createQualify}/${id}`, body);
  }

  checkQualify(body: any, textId: string, regardId: string, qualifyId: string): Observable<any> {
    return this.http.patch<any>(`${env.urlApi}${EndPoint.regard.checkQualify}/${textId}/${regardId}/${qualifyId}`, body);
  }

  lapQualify(id: string): Observable<any> {
    return this.http.patch<any>(`${env.urlApi}${EndPoint.regard.lapQualify}/${id}`, null);
  }

  resetTextQualify(textId: string, regardId: string, qualifyId: string): Observable<any> {
    return this.http.patch<any>(`${env.urlApi}${EndPoint.regard.resetTextQualify}/${textId}/${regardId}/${qualifyId}`, null);
  }

  markTextAsFinishQualify(textId: string, regardId: string, qualifyId: string): Observable<any> {
    // Redo 'mark-text-qualify/:id' on Back-End @Param() param: ParamIdTextRegardQualifyDto
    return this.http.patch<any>(
      `${env.urlApi}${EndPoint.regard.markTextAsFinishQualify}/${textId}/${regardId}/${qualifyId}`,
      null,
    );
  }
}
