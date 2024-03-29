import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'checklist',
        loadChildren: () =>
          import('../checklist/checklist.module').then(
            (m) => m.ChecklistPageModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutPageModule),
      },
      {
        path: 'itineraries',
        loadChildren: () =>
          import('../itineraries/itineraries.module').then(
            (m) => m.ItinerariesModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/about',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/itineraries',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
