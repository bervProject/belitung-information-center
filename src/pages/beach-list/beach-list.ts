import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Beach } from '../../models/beach';
import { BeachList } from '../../providers/beach-list';

/**
 * Generated class for the BeachList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-beach-list',
  templateUrl: 'beach-list.html',
})
export class BeachListPage {
  beachs: Beach[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private beachList: BeachList) {
    beachList.load().subscribe(beachs => {
      this.beachs = beachs;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeachList');
  }

}
