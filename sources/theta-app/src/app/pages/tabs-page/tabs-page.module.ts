import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { BrowseModule } from '../browse/browse.module';
import { ItineraryDetailsPageModule } from '../itinerary-details/itinerary-details.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BrowseModule,
    TabsPageRoutingModule,
    ItineraryDetailsPageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
