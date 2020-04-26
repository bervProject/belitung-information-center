import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Beach } from '../models/beach';

/*
  Generated class for the BeachList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BeachList {

  private url = 'https://bic-api.herokuapp.com/api/beach';

  constructor(private http: HttpClient) {
  }

  load(): Observable<Array<Beach>> {
    return this.http.get<Array<Beach>>(this.url, {
      headers: {
        Accept: 'application/json'
      }
    });
  }

}
