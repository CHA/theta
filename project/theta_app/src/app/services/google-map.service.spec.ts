import { TestBed } from '@angular/core/testing';

import { GoogleMapService } from './google-map.service';

describe('GoogleMapServiceTsService', () => {
  let service: GoogleMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
