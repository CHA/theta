import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { BrowseComponent } from './browse.component';
import { BrowseRoutingModule } from './browse-routing.module';
import { SharedModule } from '@theta/shared/shared.module';
import { SearchComponent } from '../search/search.component';
import { ItineraryCardComponent } from './itinerary-card/itinerary-card.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BrowseRoutingModule,
    SharedModule
  ],
  declarations: [
    BrowseComponent,
    ItineraryCardComponent,
    SearchComponent
  ],
})
export class BrowseModule {}
