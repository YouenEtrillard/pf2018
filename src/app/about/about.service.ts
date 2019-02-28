import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('AboutService');
  }

  getItems(param) {
    const sessionStorageItems = JSON.parse(sessionStorage.getItem(param));

    return sessionStorageItems == null ? this.http.get(`https://api.youen-etrillard.com/directus/public/_/items/${param}?fields=*.*.*`)
      .pipe(
        map(response => response = response['data']),
        tap(lesItems => console.log(lesItems)),
        tap(items => sessionStorage.setItem(param, JSON.stringify(items))),
        catchError(this.handleError(`get${param}'`, []))
      ) : of(sessionStorageItems);
  }
}
