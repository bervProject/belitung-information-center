import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Beach } from '../models/beach';

/*
  Generated class for the BeachList provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BeachList {

  url = 'https://belitung-information-center.herokuapp.com/getBeachList';

  constructor(public http: Http) {
  }

  load(): Observable<Beach[]> {
    return this.http.get(this.url).map(res => <Beach[]>res.json());
  }


}
