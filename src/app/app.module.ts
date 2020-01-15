import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';


import { LoginPage } from '../pages/login/login';

//import { ConnectionPage } from '../pages/connection/connection';

import { CreateEmailPage } from '../pages/create-email/create-email';



import { IonicStorageModule } from '@ionic/storage';

//import { Storage } from '@ionic/storage';
//import { IonicStorageModule } from '@ionic/storage';

import { HttpModule } from '@angular/http';
import { UrlsetupProvider } from '../providers/urlsetup/urlsetup';

// import { Network } from '@ionic-native/network';

//import { NetworkConnectionProvider } from '../providers/network-connection/network-connection';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { RequestOptions, XHRBackend } from '@angular/http';
import { DatePipe } from '@angular/common'
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { File } from '@ionic-native/file';

import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { Network } from '@ionic-native/network';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Base64 } from '@ionic-native/base64';
import { Device } from '@ionic-native/device';
import { ImageDrawTextDirective } from '../directives/image-draw-text/image-draw-text';
import { ImageDrawTextDirective2Directive } from '../directives/image-draw-text-directive2/image-draw-text-directive2';
import { ImageDrawText3Directive } from '../directives/image-draw-text3/image-draw-text3';
import { SendmanagerPage } from '../pages/sendmanager/sendmanager';
import { SendPage } from '../pages/send/send';
import { UnsendPage } from '../pages/unsend/unsend';
import { ProfilePage } from '../pages/profile/profile';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    CreateEmailPage,DashboardPage,
    ImageDrawTextDirective,ImageDrawTextDirective2Directive,ImageDrawText3Directive,SendmanagerPage,
    SendPage,UnsendPage,ProfilePage,ForgotpasswordPage
  ],
  imports: [
    
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
   CreateEmailPage,DashboardPage,SendmanagerPage,SendPage,UnsendPage,SendmanagerPage,ProfilePage,ForgotpasswordPage
  ],
  providers: [LocationAccuracy,SQLite,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationTrackerProvider,
    BackgroundGeolocation,
    Geolocation,Network,
    File,
    Base64,
    Transfer,
    Camera,
    FilePath,
    Device,
    UrlsetupProvider,
    HttpModule,
    Base64ToGallery,
    
    UrlsetupProvider,DatePipe,
    
    
    
    
    Storage,IonicStorageModule
  ]
})
export class AppModule {}
