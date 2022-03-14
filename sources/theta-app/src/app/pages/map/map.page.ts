import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-map-page',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  lat: number;
  lng: number;

  constructor(private geolocation: Geolocation) { }

  async ngOnInit() {
    const position = await this.geolocation.getCurrentPosition();
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }

}
