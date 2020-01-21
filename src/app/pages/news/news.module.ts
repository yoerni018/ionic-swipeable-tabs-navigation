import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { NewsPage } from './news.page';
import { NewDetailsPageModule } from '../new-details/new-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDetailsPageModule
  ],
  declarations: [NewsPage],
  entryComponents:[
    NewsPage
  ]
})
export class NewsPageModule {}
