import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsePageRoutingModule } from './browse-routing.module';

import { BrowsePage } from './browse.page';
import { SharedModule } from '@theta/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    BrowsePageRoutingModule
  ],
  declarations: [BrowsePage]
})
export class BrowsePageModule {}
