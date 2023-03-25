import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItinerariesBrowserComponent } from './itineraries-browser/itineraries-browser.component';
import { ItineraryComponent } from './itinerary/itinerary.component';

const routes: Routes = [
  {
    path: '',
    component: ItinerariesBrowserComponent,
  },
  {
    path: ':id',
    component: ItineraryComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItinerariesRoutingModule {}
