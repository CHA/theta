import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ItineraryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FeatureModule { }
