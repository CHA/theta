import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { BrowseComponent } from './browse.component';
import { ItineraryService } from '@theta/providers/itinerary.service';

describe('BrowseComponent', () => {
  let fixture, app;
  beforeEach(async(() => {
    const itineraryServiceMock = jasmine.createSpy('ItineraryService');

    TestBed.configureTestingModule({
      declarations: [BrowseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ItineraryService, useValue: itineraryServiceMock }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseComponent);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the speaker list page', () => {
    expect(app).toBeTruthy();
  });
});
