import { Component, OnInit } from '@angular/core';
import pref from 'assets/data/travel-preferences.json';

@Component({
  selector: 'app-travel-preferences',
  templateUrl: './travel-preferences.component.html',
  styleUrls: ['./travel-preferences.component.scss'],
})
export class TravelPreferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  preferences = pref;

}
