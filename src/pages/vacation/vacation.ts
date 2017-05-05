import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BeachListPage } from '../beach-list/beach-list';

@Component({
  selector: 'page-list',
  templateUrl: 'vacation.html'
})
export class VacationPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, source: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['Beach', 'Island', 'Nature', 'Alternative'];

    this.items = [];
    for (let i = 0; i < 4; i++) {
      this.items.push({
        title: this.icons[i],
        source: 'assets/img/' + this.icons[i] + '.jpg',
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    if(item.title == "Beach") {
      this.navCtrl.push(BeachListPage);
    }
  }
}
