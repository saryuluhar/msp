import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendmanagerPage } from './sendmanager';

@NgModule({
  declarations: [
    SendmanagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SendmanagerPage),
  ],
})
export class SendmanagerPageModule {}
