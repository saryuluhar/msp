import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events ,ToastController, Alert} from 'ionic-angular';
import { HomePage } from '../home/home';
import { SendmanagerPage } from '../sendmanager/sendmanager';
import {  Platform, AlertController} from 'ionic-angular';
import { Network } from '@ionic-native/network';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { ProfilePage } from '../../pages/profile/profile';
import { Storage } from '@ionic/storage';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { File } from '@ionic-native/file';

import { LoginPage } from '../login/login';


import { CreateEmailPage } from '../create-email/create-email';
import { UrlsetupProvider } from '../../providers/urlsetup/urlsetup';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var lat1,lng1,acc,date;
let result;
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  hide:boolean = true;
  splitlat:any;
  splitlng:any;
  skip='sucessfullogin'
  public unregisterBackButtonAction: any;
  scheme_master:any=[];
  DateList : any = [];
  checkschemecount:any;

  constructor(private sqlite: SQLite,public _state: UrlsetupProvider,public alertCtrl:AlertController,  private file: File,  public locationTracker: LocationTrackerProvider,
    private locationAccuracy: LocationAccuracy, public storage:Storage, public navCtrl: NavController, private network: Network,public navParams: NavParams,
  public alert: AlertController,public platform: Platform,private eventCtrl: Events,
  public toastCtrl: ToastController) 
  {
  result= this.file.createDir(this.file.externalRootDirectory,"MSPHC",false);
 

  // this.storage.get('sucessfullogin').then((data) =>{
  //   var skipmessage=data;
   
  //  if( this.skip != skipmessage){
   
  //   this.navCtrl.push(CreateEmailPage);
  // }
  
  // });

  let disconnectSubscription = network.onDisconnect().subscribe(() => {
    console.log('network was disconnected');
    let toast = this.toastCtrl.create({
      message: 'Network was disconnected',
      duration: 3000,
      showCloseButton: true,
      cssClass: "changeToastfaillure",
     
      
    });
    toast.present();
  });
  // watch network for a connection
  let connectSubscription = network.onConnect().subscribe(() => {
    console.log('network connected');

    // if (Network.type === 'wifi') {
    console.log('we got a wifi connection, woohoo!');
    let toast = this.toastCtrl.create({
      message: 'Network connected',
      duration: 3000,
      showCloseButton: true,
      cssClass: "changeToastsuccess",
      
    });
    toast.present();
    // }
  });

  //this.getWelfateSchme();
}

// getWelfateSchme() {
//   this._state.loadWelfateAcivityType().subscribe(res => {
//      this.DateList = res.scheme;
    
//        console.log(this.DateList);
//       //alert(this.DateList.length)
//       this.storage.set("scheme_length",this.DateList.length);
      
        
      
//    });
//  }
    
  ionViewDidLoad() {
  console.log('ionViewDidLoad DashboardPage');
  result= this.file.createDir(this.file.externalRootDirectory,"MSPHC",false);
 
  this.enableLocation()
  //this.back();
  }
  ionViewDidEnter() {
    this.initializeBackButtonCustomHandler();
}

ionViewWillLeave() {
    // Unregister the custom back button action for this page
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
}

public initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
        this.customHandleBackButton();
    }, 10);
}

private customHandleBackButton(): void {
    this.exit();
}

// getWelfateSchme() {
//   this._state.loadWelfateAcivityType().subscribe(res => {
//      this.DateList = res.scheme;
//          this.storage.get('checkinsert').then((data) =>{
//            this.checkschemecount = data;
//            if( this.checkschemecount==this.DateList.length){
//             this.GetSchememasterdata();
//            }else{
//              for (let name of this.DateList) {
//                var wa_name=name.wa_name;
//                var id=name.id;
//                var wa_code= name.wa_code;
//                var wat_code=name.wat_code;
//                var sizeofarray=this.DateList.length;
             
//              this.saveSchemesMaster(wa_name,id,wa_code,wat_code,sizeofarray)
//              }
//            }
//            });
 
//    });
//  }


 public GetSchememasterdata(){
     
  this.sqlite.create({
  name: 'msphc.db',
  location: 'default'
  })
  .then((db: SQLiteObject) => {
    db.executeSql('select * from tbl_scheme_master',[]).then((data) => {
      this.scheme_master = [];
      if(data.rows.length > 0) {
      for(var i = 0; i < data.rows.length; i++) {
       this.scheme_master.push({id: data.rows.item(i).id,wa_code: data.rows.item(i).wa_code,wat_code: data.rows.item(i).wat_code,wa_name: data.rows.item(i).wa_name});}
     console.log(this.scheme_master)
   //  this.storage.set("checkinsert",size);
     
   }
      }, (err) => {
      console.log('Unable to execute sql: '+JSON.stringify(err));
      });
 
  //   db.executeSql('select * from tbl_scheme_master',[]).then((data) => {
  //     this.checkschemecount=data;
      
  //     alert("json"+JSON.stringify(data));
  //    alert("all count"+this.checkschemecount)
  
  // }, (err) => {
  //   console.log('Unable to execute sql: '+JSON.stringify(err));
  // });
  })
  .catch(e => alert(JSON.stringify(e))); }

 


enableLocation(){
this.locationAccuracy.canRequest().then((canRequest: boolean) => {
if(canRequest) {
this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
() => {
this.start();},
error => console.log('Error requesting location permissions'+JSON.stringify(error)));}})}
start(){
  this.locationTracker.startTracking();
  lat1=this.locationTracker.lat;
  lng1= this.locationTracker.lng;
  var str = this.locationTracker.lat.toString();
  this.splitlat = str.slice(0,5);
  var str2 = this.locationTracker.lng.toString();
  this.splitlng = str2.slice(0,5);
  date = new Date().toISOString();
  acc=this.locationTracker.acc;}
  
public help(){
let toast = this.toastCtrl.create({
      message: 'Under Construction',
      duration: 3000,
      position: 'top'
    });
  toast.present();
  }

public gotomaps() {
 this.navCtrl.push(HomePage);
}

public gotosendmanager(){
  this.navCtrl.push(SendmanagerPage);
}
public profile(){
  this.navCtrl.push(ProfilePage);
}



public logout(){
  let alert = this.alert.create({
    title: 'Confirm',
    message: 'Do you want to Logout?',
    buttons: [{
      text: "Logout",
      handler: () => { this.logou1() }
    }, {
      text: "Cancel",
      role: 'cancel'
    }]
  })
  alert.present();

}

public logou1(){

  this.storage.remove("login");
  this.navCtrl.push(LoginPage);
}

public gototabs(){
  //this.navCtrl.push(MultipleimagePage);
  let alert = this.alert.create({
    title: 'Message',
    message: 'Under Construction',
    buttons: [
       {
      text: "Ok",
      role: 'cancel'
    }]
  })
  alert.present();
}



public saveSchemesMaster(wa_name,id,wa_code,wat_code,size){
  
     
  this.sqlite.create({
    name: 'msphc.db',
    location: 'default'
    })
    .then((db: SQLiteObject) => {
    db.executeSql('CREATE TABLE IF NOT EXISTS tbl_scheme_master(id,wa_code,wat_code,wa_name)',[])
    .then(() => console.log("img  Executed"))
    .catch(e => console.log(e));
    db.executeSql('INSERT INTO tbl_scheme_master(id,wa_code,wat_code,wa_name) VALUES(?,?,?,?)', [id,wa_code,wat_code,wa_name])
    .then(() => console.log(" img INDERTed"))
    .catch(e => console.log(e));
    db.executeSql('select * from tbl_scheme_master',[]).then((data) => {
    this.scheme_master = [];
    if(data.rows.length > 0) {
    for(var i = 0; i < data.rows.length; i++) 
    {
     this.scheme_master.push({id: data.rows.item(i).id,wa_code: data.rows.item(i).wa_code,wat_code: data.rows.item(i).wat_code,wa_name: data.rows.item(i).wa_name});
    }
   console.log(this.scheme_master)
 
   this.storage.set("checkinsert",size);
   
 }
    }, (err) => {
   console.log('Unable to execute sql: '+JSON.stringify(err));
    });
    })
    .catch(e => console.log(JSON.stringify(e)));
   }

exit(){
  let alert = this.alert.create({
    title: 'Confirm',
    message: 'Do you want to exit?',
    buttons: [{
      text: "Exit",
      handler: () => { this.exitApp() }
    }, {
      text: "Cancel",
      role: 'cancel'
    }]
  })
  alert.present();
}
exitApp(){
this.platform.exitApp();
}

}
