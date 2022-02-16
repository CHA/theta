import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';

import { CalendarComponent } from './calendar/calendar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ItineraryCardComponent } from './itinerary-card/itinerary-card.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SwiperModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SwiperModule,
        CalendarComponent,
        ImageSliderComponent,
        ItineraryCardComponent,
        MapComponent,
        TimelineComponent
    ],
    declarations: [
        CalendarComponent,
        ImageSliderComponent,
        ItineraryCardComponent,
        MapComponent,
        TimelineComponent
    ],
    providers: [],
})
export class SharedModule { }
