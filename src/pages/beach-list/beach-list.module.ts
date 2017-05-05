import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeachListPage } from './beach-list';

@NgModule({
  declarations: [
    BeachListPage,
  ],
  imports: [
    IonicPageModule.forChild(BeachListPage),
  ],
  exports: [
    BeachListPage
  ]
})
export class BeachListPageModule {}
