import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { SharedModule } from '@theta/shared/shared.module';
import { CreateItineraryModalComponent } from './create-itinerary-modal/create-itinerary-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    SharedModule,
  ],
  declarations: [ProfilePage, CreateItineraryModalComponent],
})
export class ProfilePageModule {}
