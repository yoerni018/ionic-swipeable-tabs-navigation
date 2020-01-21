import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { NewDetailsPage } from './new-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule 
  ],
  declarations: [NewDetailsPage],
  entryComponents: [NewDetailsPage] 
})
export class NewDetailsPageModule {} 
