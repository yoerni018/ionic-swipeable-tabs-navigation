import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { SuperTabsModule } from "@ionic-super-tabs/angular";
import { NewsPageModule } from '../pages/news/news.module';
import { AboutPageModule } from '../pages/about/about.module';
import { AccountPageModule } from '../pages/account/account.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    SuperTabsModule,
    NewsPageModule,
    AboutPageModule,
    AccountPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
