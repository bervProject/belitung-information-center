import { Component } from '@angular/core';
import { Beach } from '../../models/beach';
import { BeachList } from '../../providers/beach-list';

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
    beachList.load().subscribe(beachs => {
      this.beachs = beachs;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachList');
  }

}
