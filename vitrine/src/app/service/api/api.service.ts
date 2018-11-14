import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {environment} from '../../../environments/environment';

@Injectable({ providedIn: 'root'})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, input?: any, txtResponse = false, jsonContentType = false, disabledLogoutOn401 = false): Observable<any> {
    const params: HttpParams = this.getHttpParams(input, false);
    const headers: HttpHeaders = this.getHeaders(false);
    const options = {headers: headers, params: params};

    if (txtResponse) {
      options['responseType'] = 'text';
    }

    return this.http.get(`${environment.apiUrl}/${url}`, options).pipe(
      catchError(error => this.handleErrorObservable(error, !disabledLogoutOn401))
    );
  }

  post(url: string, input?: any, txtResponse = false, jsonContentType = true, disabledLogoutOn401 = false): Observable<any> {
    const params: HttpParams = this.getHttpParams(input, jsonContentType);
    const headers: HttpHeaders = this.getHeaders(jsonContentType);
    const options = { headers: headers, params: params };

    if (txtResponse) {
      options['responseType'] = 'text';
    }

    return this.http.post(`${environment.apiUrl}/${url}`, jsonContentType ? input : params, options).pipe(
      catchError(error => this.handleErrorObservable(error, !disabledLogoutOn401))
    );
  }

  put(url: string, input?: any, txtResponse = false, jsonContentType = true, disabledLogoutOn401 = false): Observable<any> {
    const params: HttpParams = this.getHttpParams(input, jsonContentType);
    const headers: HttpHeaders = this.getHeaders(jsonContentType);
    const options = { headers: headers, params: params };

    if (txtResponse) {
      options['responseType'] = 'text';
    }

    return this.http.put(`${environment.apiUrl}/${url}`, jsonContentType ? input : params, options).pipe(
        catchError(error => this.handleErrorObservable(error, !disabledLogoutOn401))
    );
  }

  delete(url: string, input?: any, txtResponse = false, jsonContentType = true, disabledLogoutOn401 = false): Observable<any> {
    const params: HttpParams = this.getHttpParams(input, jsonContentType);
    const headers: HttpHeaders = this.getHeaders(jsonContentType);
    const options = { headers: headers, params: params };

    if (jsonContentType) {
      options['body'] = input;
    }

    if (txtResponse) {
      options['responseType'] = 'text';
    }

    return this.http.request('delete', `${environment.apiUrl}/${url}`, options).pipe(
      catchError(error => this.handleErrorObservable(error, !disabledLogoutOn401))
    );
  }

  private handleErrorObservable (error: Response | any, logoutOn401 = true) {
    console.error(error.message || error);
    return Observable.throw(error.error || error.message || error);
  }

  private getHttpParams(input: any, jsonContent = true): HttpParams {
    let params: HttpParams = new HttpParams();
    if (input && !jsonContent) {
      Object.keys(input).forEach((key) => params = params.append(key, input[key]));
    }
    return params;
  }

  private getHeaders(jsonContentType: boolean): HttpHeaders {
    return (jsonContentType) ?
      new HttpHeaders({'Content-Type': 'application/json'}) :
      new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
  }
}
