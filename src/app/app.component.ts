import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { ViewChild } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { UrlsetupProvider } from '../providers/urlsetup/urlsetup';
import { App,AlertController,Nav } from 'ionic-angular';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CreateEmailPage } from '../pages/create-email/create-email';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  
  rootPage:any  ;
  skip='sucessfullogin';
  @ViewChild(Nav) nav: Nav;
  scheme_master:any=[];
  DateList : any = [];
  checkschemecount:any;

  constructor(public _state: UrlsetupProvider,private sqlite: SQLite,public  app: App, 
     public alertCtrl: AlertController,platform: Platform, statusBar: StatusBar,  public splashScreen: SplashScreen,public storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.storage.get('login').then((data) =>{
    var skipmessage=data;
   
   if( this.skip == skipmessage){
    //this.getWelfateSchme();
    this.nav.push(DashboardPage);
  }else{
   // this.getWelfateSchme();
    //this.nav.push(CreateEmailPage);
    this.nav.push(LoginPage);
    //this.nav.push(DashboardPage);
  }
  
  });
  });
  }

}

