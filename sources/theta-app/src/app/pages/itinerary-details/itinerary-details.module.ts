import { NgModule } from '@angular/core';

import { ItineraryDetailsPageRoutingModule } from './itinerary-details-routing.module';

import { ItineraryDetailsPage } from './itinerary-details.page';
import { SharedModule } from '@theta/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ItineraryDetailsPageRoutingModule
  ],
  declarations: [ItineraryDetailsPage]
})
export class ItineraryDetailsPageModule {}
