import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { SharedModule } from '../shared/shared.module';
import { ActivityCardComponent } from './itinerary/activity-card/activity-card.component';



@NgModule({
  declarations: [
    ItineraryComponent,
    ActivityCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
