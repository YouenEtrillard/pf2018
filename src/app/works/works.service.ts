import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Work } from './work';

@Injectable()
export class WorksService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('WorksService');
  }



  getWorks(): Observable<Work[]> {
    const sessionStorageWorks = JSON.parse(sessionStorage.getItem('works'));

    return sessionStorageWorks == null ? this.http.get<Work[]>('https://api.youen-etrillard.com/directus/public/_/items/works?fields=*.*.*')
      .pipe(
        map(response => response = response['data']),
        tap(lesItems => console.log(lesItems)),
        tap(items => sessionStorage.setItem('works', JSON.stringify(items))),
        catchError(this.handleError('getWorks', []))
    ) : of(sessionStorageWorks);
  }
}
