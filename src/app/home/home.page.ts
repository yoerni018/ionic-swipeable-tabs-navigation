import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NewsPage } from "src/app/pages/news/news.page";
import { AccountPage } from "src/app/pages/account/account.page";
import { AboutPage } from "src/app/pages/about/about.page";
import { IonNav } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  newsPage = NewsPage;
  accountPage = AccountPage;
  aboutPage = AboutPage;

  canGoBack=false;
  title="News";

  @ViewChild('newsNav', {static: false}) newsNav:IonNav;

  constructor() {
      console.log("Data");
  }

  ngAfterViewInit(){

    this.newsNav.ionNavDidChange.subscribe( async ev=>{
        this.canGoBack= await this.newsNav.canGoBack();
        console.log( "Change", ev );
    });
  }

  goBack(){
    this.newsNav.pop();
  }

  onTabChange(event){
    if(event.detail.index==0){
      this.title="News";  
    }
    if(event.detail.index==1){
      this.title="Account";  
    }
    if(event.detail.index==2){
      this.title="About"; 
    }
  }

}
