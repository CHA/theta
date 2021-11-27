import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelPreferencesComponent } from './travel-preferences.component';


const routes: Routes = [
  {
    path: '',
    component: TravelPreferencesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelPreferencesRoutingModule { }
