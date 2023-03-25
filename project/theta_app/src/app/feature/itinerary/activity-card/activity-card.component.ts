import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { Itinerary } from '../models/itinerary';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  @Input() activity: Activity | null = null;

  constructor() {}

  ngOnInit(): void {}
}
