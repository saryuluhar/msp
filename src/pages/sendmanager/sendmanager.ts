import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SendPage } from '../send/send';
import { UnsendPage } from '../unsend/unsend';

@IonicPage()
@Component({
  selector: 'page-sendmanager',
  templateUrl: 'sendmanager.html',
})
export class SendmanagerPage {
  tab1Root: any = UnsendPage;
  tab2Root: any = SendPage;
  // tab3Root: any = ZipPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabPage');
  }

}
