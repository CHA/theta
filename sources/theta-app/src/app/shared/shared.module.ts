import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CalendarComponent,
        ImageSliderComponent,
        MapComponent,
        TimelineComponent
    ],
    declarations: [
        CalendarComponent,
        ImageSliderComponent,
        MapComponent,
        TimelineComponent
    ],
    providers: [],
})
export class SharedModule { }
