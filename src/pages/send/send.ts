import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {
  items:any;
  sendimages=[];
  arrayindex: any = [];
  mapping:any;
  id:any;
  mappingdata:any;
  mappingdata1:any;
  mappingdata2:any
  imagebycomma: any = [];
  showThis3:boolean;
  showThis2:boolean
  showThis1:boolean
  constructor(public file:File,public navCtrl: NavController, public navParams: NavParams,public storage: Storage,private sqlite: SQLite) 
  {
  }

  ionViewDidEnter() {
    this.send();
  }

  public send(){
    this.sqlite.create({
    name: 'msphc.db',
    location: 'default'
    })
    .then((db: SQLiteObject) => {
   db.executeSql('SELECT DISTINCT name FROM sendimages ', []).then((data) => {
    this.sendimages = [];
    if(data.rows.length > 0) {
    for(var i = 0; i < data.rows.length; i++) {
    this.sendimages.push({name: data.rows.item(i).name});}
    }
    }, (err) => {
      //to see error do with alert
   console.log('Unable to execute sql: '+JSON.stringify(err));
    });
    })
    .catch(e => console.log(JSON.stringify(e)));  
    }

  public optionsFn(){
    this.arrayindex=this.mapping;
          this.id=this.arrayindex.id;
          //alert(this.arrayindex.name);

          this.imagebycomma=this.arrayindex.name.split(',');

         
          // this.mappingdata=this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma[0]+".png";
          // this.mappingdata1=this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma[1]+".png";
          //  this.mappingdata2=this.file.externalRootDirectory+"MSPHC/msphc_images/"+this.imagebycomma[2]+".png";

           this.file.readAsDataURL(this.file.externalRootDirectory+"MSPHC/msphc_images/", this.imagebycomma[0]+".png").then(res=> this.mappingdata = res  );
         

           this.file.readAsDataURL(this.file.externalRootDirectory+"MSPHC/msphc_images/",this.imagebycomma[2]+".png").then(res=> this.mappingdata2 = res  );

           this.file.readAsDataURL(this.file.externalRootDirectory+"MSPHC/msphc_images/",this.imagebycomma[1]+".png").then(res=> this.mappingdata1 = res  );
           }

}
