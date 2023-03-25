import { TestBed } from '@angular/core/testing';

import { ItinerariesServiceService } from './itineraries-service.service';

describe('ItinerariesServiceService', () => {
  let service: ItinerariesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItinerariesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
