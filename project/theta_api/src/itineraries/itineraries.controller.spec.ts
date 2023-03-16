import { Test } from '@nestjs/testing';
import { ItinerariesController } from './itineraries.controller';
import { ItinerariesService } from './itineraries.service';

describe('ItinerariesController', () => {
  let appController: ItinerariesController;
  const mockItineraryService = {
    getItineraries: () => 'Itineraries!'
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ItinerariesController],
      providers: [
        { provide: ItinerariesService, useValue: mockItineraryService }
      ]
    }).compile();

    appController = moduleRef.get<ItinerariesController>(ItinerariesController);
  });

  describe('root', () => {
    it('should return itineraries', () => {
      expect(appController.getItineraries()).toBe('Itineraries!');
    });
  });
});
