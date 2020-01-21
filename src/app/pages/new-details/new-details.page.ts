import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.page.html',
  styleUrls: ['./new-details.page.scss'],
})
export class NewDetailsPage implements OnInit {

  constructor(
    private nav:IonNav
  ) { }

  ngOnInit() {
  }

  goBack(){
     this.nav.pop(); 
  }

}
