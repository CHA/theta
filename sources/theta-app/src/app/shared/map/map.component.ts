import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges {

  @Input() lat: number;
  @Input() lng: number;
  apiLoaded: Observable<boolean>;
  center: google.maps.LatLngLiteral;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const lat = changes.lat?.currentValue;
    const lng = changes.lng?.currentValue;
    if (lat && lng) {
      this.center = { lat, lng };
    }
  }

}
