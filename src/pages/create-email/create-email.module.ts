import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateEmailPage } from './create-email';

@NgModule({
  declarations: [
    CreateEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateEmailPage),
  ],
})
export class CreateEmailPageModule {}
