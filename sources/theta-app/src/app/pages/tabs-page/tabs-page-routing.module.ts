import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'browse',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../browse/browse.module').then((m) => m.BrowseModule),
          }
        ]
      },
      {
        path: 'itineraries/:uuid',
        loadChildren: () =>
          import('../itinerary-details/itinerary-details.module').then(
            (m) => m.ItineraryDetailsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/app/tabs/browse',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
