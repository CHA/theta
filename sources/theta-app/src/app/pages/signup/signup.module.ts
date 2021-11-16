import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup';
import { SignupPageRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule
  ],
  declarations: [
    SignupPage,
  ]
})
export class SignUpModule { 

  showPassword = false;
  
  togglePasswordText() {
    console.log('togglePasswordText: ', this.showPassword);

    this.showPassword = !this.showPassword;
  }

}
