import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItineraryPageRoutingModule } from './itinerary-routing.module';
import { ItineraryPage } from './itinerary.page';
import { SharedModule } from '@theta/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItineraryPageRoutingModule,
    SharedModule,
  ],
  declarations: [ItineraryPage]
})
export class ItineraryPageModule {}
