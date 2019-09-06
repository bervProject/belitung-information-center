import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BeachListPage } from './beach-list.page';
import { BeachList } from '../../providers/beach-list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: BeachListPage
      }
    ])
  ],
  providers: [
    BeachList
  ],
  declarations: [
    BeachListPage
  ]
})
export class BeachListPageModule {}
