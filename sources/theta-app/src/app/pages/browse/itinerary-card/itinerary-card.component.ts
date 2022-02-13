import { Component, Input, OnInit } from '@angular/core';
import { Itinerary } from '@theta/models/itinerary';

@Component({
    selector: 'tta-itinerary-card',
    templateUrl: 'itinerary-card.component.html',
    styleUrls: ['itinerary-card.component.scss']
})

export class ItineraryCardComponent implements OnInit {

    @Input() itinerary: Itinerary;

    constructor() { }

    ngOnInit() { }

}
