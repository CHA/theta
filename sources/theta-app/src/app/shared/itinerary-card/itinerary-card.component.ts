import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Router } from '@angular/router';
import { Itinerary } from '@theta/models/itinerary';
import { DefaultSwiperOptions } from '../config/swiper-options/default-swiper-options';

@Component({
    selector: 'app-itinerary-card',
    templateUrl: 'itinerary-card.component.html',
    styleUrls: ['itinerary-card.component.scss']
})

export class ItineraryCardComponent implements OnChanges {

    @Input() itinerary: Itinerary;
    imageUrls: string[] = [];
    swiperConfig = DefaultSwiperOptions.config;

    constructor(
        private router: Router
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.itinerary) {
            return;
        }
        const itinerary = changes.itinerary.currentValue;
        this.imageUrls.push(...itinerary.imageUrls);
        itinerary.activities.forEach(a => {
            this.imageUrls.push(...a.imageUrls);
        });
    }

    open(uuid: string) {
        this.router.navigateByUrl(`/app/itineraries/${uuid}`);
    }
}
