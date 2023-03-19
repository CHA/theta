import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { SharedModule } from '../shared/shared.module';
import { ItineraryCardComponent } from './itinerary/itinerary-card/itinerary-card.component';



@NgModule({
  declarations: [
    ItineraryComponent,
    ItineraryCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
