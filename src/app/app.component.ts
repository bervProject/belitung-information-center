import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { VacationPage } from '../pages/vacation/vacation';
import { GalleryPage } from '../pages/gallery/gallery';
import { AccessPage } from '../pages/access/access';
import { AgendaPage } from '../pages/agenda/agenda';
import { WeatherPage } from '../pages/weather/weather';
import { FoodPage } from '../pages/food/food';
import { HistoryPage } from '../pages/history/history';
import { HotelPage } from '../pages/hotel/hotel';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Vacation Place', component: VacationPage },
      { title: 'Weather', component: WeatherPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Agenda', component: AgendaPage },
      { title: 'Access to Belitung', component: AccessPage },
      { title: 'Food Court / Inn', component: FoodPage },
      { title: 'History', component: HistoryPage },
      { title: 'Hotel / Guest House', component: HotelPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
