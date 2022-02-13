import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItineraryDetailsPageRoutingModule } from './itinerary-details-routing.module';

import { ItineraryDetailsPage } from './itinerary-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItineraryDetailsPageRoutingModule
  ],
  declarations: [ItineraryDetailsPage]
})
export class ItineraryDetailsPageModule {}
