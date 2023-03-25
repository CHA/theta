import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChecklistPage } from './checklist.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ChecklistPageRoutingModule } from './checklist-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ChecklistPageRoutingModule,
  ],
  declarations: [ChecklistPage],
})
export class ChecklistPageModule {}
