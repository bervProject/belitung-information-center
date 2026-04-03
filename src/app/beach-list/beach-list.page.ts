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
  standalone: false
})
export class BeachListPage {
  beachs: Beach[] = []

  constructor(private beachList: BeachList) {
    this.beachList.load().subscribe({
      next: beachs => { this.beachs = beachs.data ?? []; },
      error: (error: HttpErrorResponse) => {
        console.log(`Error: ${JSON.stringify(error)}`);
        this.beachs = [];
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachList');
  }

  doRefresh(event: any) {
    this.beachList.load().subscribe({
      next: beachs => { this.beachs = beachs.data ?? []; },
      error: (error: HttpErrorResponse) => {
        console.log(`Error: ${JSON.stringify(error)}`);
        this.beachs = [];
        event.target.complete();
      },
      complete: () => { event.target.complete(); }
    });
  }
}
