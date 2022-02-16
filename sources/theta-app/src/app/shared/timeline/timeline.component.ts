import { Component, Input, OnInit } from '@angular/core';
import { Activity } from '@theta/models/activity';
import { Emoji } from '../emojis';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  @Input() activities: Activity[];
  emoji = Emoji;

  constructor() { }

  ngOnInit() { }

}
