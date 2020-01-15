import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DashboardPage } from '../dashboard/dashboard';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  offices:any;
  showThis:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams,private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  ngOnInit() {
    this.registration();
    
  }
  user_data = [];
  public registration(){
    this.sqlite.create({
    name: 'msphc.db',
    location: 'default'
    })
    .then((db: SQLiteObject) => {
   db.executeSql('select * from registration', []).then((data) => {
    this.user_data = [];
    if(data.rows.length > 0) {
    for(var i = 0; i < data.rows.length; i++) {
    this.user_data.push({
      official_name: data.rows.item(i).official_name,
      mob_no:data.rows.item(i).mob_no,
      pmc:data.rows.item(i).pmc,
      contractor:data.rows.item(i).contractor,
      resion:data.rows.item(i).resion,
      email:data.rows.item(i).email
    
    });
  
   }
    }
    }, (err) => {
    console.log('Unable to execute sql: '+JSON.stringify(err));
    });
    })
    .catch(e => console.log(JSON.stringify(e)));
   
  }  

  public back(){
    //this.navCtrl.push(DashboardPage);
    this.navCtrl.push(DashboardPage).then(() => {
      const index = this.navCtrl.getActive().index;
      this.navCtrl.remove(0, index);
    });
  }
}
