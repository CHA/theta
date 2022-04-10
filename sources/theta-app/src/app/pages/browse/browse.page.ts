import { Component, OnInit } from '@angular/core';
import { Category } from '@theta/models/category';
import { Itinerary } from '@theta/models/itinerary';
import { CategoryService } from '@theta/services/category.service';
import { ItineraryService } from '@theta/services/itinerary.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {

  recentlyViewed: Itinerary[] = [];
  showFilter: boolean;
  today = new Date();
  categories: Category[];

  constructor(
    private itineraryService: ItineraryService,
    private categoryService: CategoryService
  ) { }

  async ngOnInit() {
    this.recentlyViewed = await this.itineraryService.search(null);
    this.categories = await this.categoryService.getCategories();
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

}
