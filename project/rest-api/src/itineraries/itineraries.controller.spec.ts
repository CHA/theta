import { Test, TestingModule } from '@nestjs/testing';
import { ItinerariesController } from './itineraries.controller';
import { ItinerariesService } from './itineraries.service';

describe('ItinerariesController', () => {
  let appController: ItinerariesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ItinerariesController],
      providers: [ItinerariesService],
    }).compile();

    appController = app.get<ItinerariesController>(ItinerariesController);
  });

  describe('root', () => {
    it('should return itineraries', () => {
      expect(appController.getItineraries()).toBe('Itineraries!');
    });
  });
});
