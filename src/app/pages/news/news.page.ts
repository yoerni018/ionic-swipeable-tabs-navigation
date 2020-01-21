import { Component, OnInit } from '@angular/core';
import { NewDetailsPage } from "src/app/pages/new-details/new-details.page";
import { IonNav } from '@ionic/angular';
import { SuperTabs } from '@ionic-super-tabs/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {


  newsDetail = NewDetailsPage

  constructor(
    private nav:IonNav,
    private st:SuperTabs
  ) { }

  ngOnInit() {
  }

  openDetails(){
    this.nav.push(this.newsDetail); 
  }

  openAboutTab(){
    this.st.selectTab(2);
  }

}
