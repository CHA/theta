import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItinerariesBrowserComponent } from './itineraries-browser/itineraries-browser.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItineraryComponent } from './itinerary/itinerary.component';

@NgModule({
  declarations: [ItinerariesBrowserComponent, ItineraryComponent],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    ItinerariesRoutingModule,
  ],
  exports: [ItinerariesBrowserComponent],
})
export class ItinerariesModule {}
