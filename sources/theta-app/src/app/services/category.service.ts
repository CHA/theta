import { Injectable } from '@angular/core';
import { Category } from '@theta/models/category';
import { AppService } from './app.service';
import { ItineraryService } from './itinerary.service';


@Injectable({ providedIn: 'root' })
export class CategoryService {

  private categories = ['food', 'date', 'london', 'shopping', 'party', 'outdoor'];
  constructor(
    private app: AppService,
    private itineraryService: ItineraryService
  ) { }

  async getCategories(): Promise<Category[]> {
    const itineraries = await this.itineraryService.search(null);
    const uniqueTags = [...new Set(
      itineraries.map(x => x.activities.map(a => a.tags)).flat().flat()
    )];
    const categories: Category[] = [];
    uniqueTags.forEach(tag => {
      const imgName = this.categories.includes(tag) ? tag : 'default';
      categories.push({
        name: tag,
        imageUrl: `${this.app.backgroundsPath}/${imgName}.png`
      });
    });
    return categories;
  }
}
