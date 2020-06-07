import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Beach } from '../models/beach';
import { Paginate } from 'src/models/paginate';

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

  load(): Observable<Paginate<Beach>> {
    return this.http.get<Paginate<Beach>>(this.url, {
      headers: {
        Accept: 'application/json'
      }
    });
  }

}
