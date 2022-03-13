import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Card } from '@theta/models/card';
import { Itinerary } from '@theta/models/itinerary';
import { User } from '@theta/models/user';
import { AppService } from '@theta/services/app.service';
import { ItineraryService } from '@theta/services/itinerary.service';
import { SwiperService } from '@theta/services/swiper.service';
import { UserService } from '@theta/services/user.service';
import SwiperCore, { FreeMode, Pagination } from 'swiper';

SwiperCore.use([FreeMode, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  itineraries: Itinerary[] = [];
  topPicks: Card[] = [];
  recommendations: Card[] = [];
  user: User;

  constructor(
    public swiper: SwiperService,
    private app: AppService,
    private itineraryService: ItineraryService,
    private userService: UserService,
    private route: ActivatedRoute,
    private menuController: MenuController
  ) {
    this.route.params.subscribe(() => {
      this.user = this.userService.userToken?.user;
    });
  }

  async ngOnInit() {
    this.itineraries = await this.itineraryService.search(null);
    this.topPicks = this.itineraryService.toCards(this.itineraries);
    this.recommendations = this.itineraryService.toCards(this.itineraries);
  }

  async refresh(event) {
    this.itineraries = await this.itineraryService.search(null);
    event.target.complete();
  }

  onCardTap(event: Card) {
    this.app.navigateTo(`/itinerary/${event.id}`);
  }

  login() {
    this.app.toLoginPage();
  }

  openMenu() {
    this.menuController.open();
  }

}
