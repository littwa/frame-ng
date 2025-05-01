import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EndPoint } from '../constants/and-points.api';

interface Manager {
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  urlApi = environment.urlApi;
  public finalizeAuthDefine$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  public signUpUser(body: any): Observable<any> {
    return this.http.post<any>(`${this.urlApi}${EndPoint.auth.signUpUser}`, body);
  }

  public signInUser(body: any): Observable<any> {
    return this.http
      .post<any>(`${this.urlApi}${EndPoint.auth.signInUser}`, body)
      .pipe
      // catchError(err => {
      //   console.log(1111, err);
      //   return of(err);y
      // }),
      ();
  }

  public getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${EndPoint.auth.getCurrentUser}`);
  }

  public signOutCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${EndPoint.auth.signOutCurrentUser}`);
  }

  public getRefreshTokens(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${EndPoint.auth.getRefresh}`);
  }

  public updateCurrentUser(body: any, id: string): Observable<any> {
    return this.http.patch<any>(`${this.urlApi}${EndPoint.auth.updateCurrentUser}/${id}`, body);
  }

  // public verifyManger(code: string): Observable<any> {
  //   return this.http.get<any>(`${this.urlApi}${AndPoint.auth.verifyManger}${code}`)
  // }
  //
  // public verifyCustomer(code: string): Observable<any> {
  //   return this.http.get<any>(`${this.urlApi}${AndPoint.auth.verifyCustomer}${code}`)
  // }
  // /////////
  // public updateCustomer(date: any): Observable<any> {
  //   console.log(777, date)
  //   return this.http.post<any>(`${this.urlApi}${AndPoint.auth.updateCustomer}/${date.id}`, date.body)
  // }
  //

  // public checkValidToken() {
  //   const token = localStorage.getItem(TOKEN);
  //   if (token) {
  //     return this.http.post(`${this.apiUrl}${ApiConstants.auth.verifyToken}`, { token });
  //   }
  //   return of(false);
  // }
}
