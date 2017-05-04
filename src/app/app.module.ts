import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VacationPage } from '../pages/vacation/vacation';
import { GalleryPage } from '../pages/gallery/gallery';
import { AccessPage } from '../pages/access/access';
import { AgendaPage } from '../pages/agenda/agenda';
import { WeatherPage } from '../pages/weather/weather';
import { FoodPage } from '../pages/food/food';
import { HistoryPage } from '../pages/history/history';
import { HotelPage } from '../pages/hotel/hotel';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VacationPage,
    GalleryPage,
    AccessPage,
    AgendaPage,
    WeatherPage,
    FoodPage,
    HistoryPage,
    HotelPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VacationPage,
    GalleryPage,
    AccessPage,
    AgendaPage,
    WeatherPage,
    FoodPage,
    HistoryPage,
    HotelPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
