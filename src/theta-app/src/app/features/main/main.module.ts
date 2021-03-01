import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { StyleSelectionComponent } from './style-selection/style-selection.component';

@NgModule({
    imports: [
        MainRoutingModule,
        SharedModule
    ],
    exports: [
        MainComponent,
        StyleSelectionComponent
    ],
    declarations: [
        MainComponent,
        StyleSelectionComponent
    ],
    providers: [],
})

export class MainModule { }
