import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItinerariesBrowserComponent } from './itineraries-browser/itineraries-browser.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ItinerariesBrowserComponent],
  imports: [CommonModule, IonicModule, HttpClientModule],
  exports: [ItinerariesBrowserComponent],
})
export class ItinerariesModule {}
