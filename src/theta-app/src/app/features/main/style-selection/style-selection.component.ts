import { Component, OnInit } from '@angular/core';
import { ChipItem } from 'src/app/shared/models/chip-item';
import { ReferenceDataService } from 'src/app/shared/services/reference-data.service';

@Component({
  selector: 'app-style-selection',
  templateUrl: './style-selection.component.html',
  styleUrls: ['./style-selection.component.scss'],
})
export class StyleSelectionComponent implements OnInit {

  travelStyles: ChipItem[] = [];

  constructor(
    private refDataService: ReferenceDataService
  ) { }

  ngOnInit() {
    this.travelStyles = this.refDataService.getTravelStyles();
  }

}
