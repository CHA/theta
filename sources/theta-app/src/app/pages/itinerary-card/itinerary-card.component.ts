import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Itinerary } from '@theta/models/itinerary';

@Component({
    selector: 'tta-itinerary-card',
    templateUrl: 'itinerary-card.component.html',
    styleUrls: ['itinerary-card.component.scss']
})

export class ItineraryCardComponent implements OnChanges {

    @Input() itinerary: Itinerary;
    imageUrls: string[] = [];

    constructor(
        private router: Router
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.itinerary) {
            return;
        }
        const itinerary = changes.itinerary.currentValue;
        this.imageUrls.push(...itinerary.imageURLs);
        itinerary.activities.forEach(a => {
            this.imageUrls.push(...a.imageUrls);
        });
    }

    open(uuid: string) {
        this.router.navigateByUrl(`/app/tabs/itineraries/${uuid}`);
    }

}
