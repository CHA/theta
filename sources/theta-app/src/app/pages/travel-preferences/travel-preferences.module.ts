import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TravelPreferencesRoutingModule } from './travel-preferences-routing.module';
import { TravelPreferencesComponent } from './travel-preferences.component'


@NgModule({
  declarations: [ TravelPreferencesComponent ],
  imports: [
    CommonModule,
    TravelPreferencesRoutingModule,
    IonicModule
  ]
})
export class TravelPreferencesModule { }
