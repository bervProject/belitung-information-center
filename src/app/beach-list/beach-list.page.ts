import { Component } from '@angular/core';
import { Beach } from '../../models/beach';
import { BeachList } from '../../providers/beach-list';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the BeachList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-beach-list',
  templateUrl: 'beach-list.page.html',
})
export class BeachListPage {
  beachs: Beach[]

  constructor(private beachList: BeachList) {
    this.beachList.load().subscribe(beachs => {
      this.beachs = beachs;
    }, this.handleError)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachList');
  }

  private handleError(error: HttpErrorResponse) {
    console.log(`Error: ${JSON.stringify(error)}`);
  }

  doRefresh(event: any) {
    console.log('Begin async operation');

    this.beachList.load().subscribe(beachs => {
      this.beachs = beachs;
    }, this.handleError, () => {
      event.target.complete();
    });
  }
}
