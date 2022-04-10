import { CategoryService } from './category.service';

describe('CategoryService', () => {

  const appServiceMock = {
    backgroundsPath: jasmine.createSpy('backgroundsPath')
  } as any;
  const itineraryServiceMock = {
    search: jasmine.createSpy('search')
  } as any;

  const categoryService = new CategoryService(appServiceMock, itineraryServiceMock);

  it('should return category object with image url', async () => {
    await categoryService.getCategories();
    expect(appServiceMock.backgroundsPath).toHaveBeenCalledTimes(1);
  });

});
