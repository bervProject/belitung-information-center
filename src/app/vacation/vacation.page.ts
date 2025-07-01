import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-list',
  templateUrl: 'vacation.page.html',
  standalone: false
})
export class VacationPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, source: string}>;

  constructor(private router: Router, private route: ActivatedRoute) {
    // If we navigated to this page, we will have an item available as a nav param
    // this.selectedItem = this.navParams.get('item');

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

  ngOnInit() {
    this.selectedItem = this.route.snapshot.paramMap.get('item');
  }

  itemTapped(event : any, item : any) {
    // That's right, we're pushing to ourselves!
    if(item.title == "Beach") {
      this.router.navigate(['/beach']);
    }
  }
}
