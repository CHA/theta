import { Component, OnInit } from '@angular/core';
import { Card } from '@theta/models/card';
import { User } from '@theta/models/user';
import { AppService } from '@theta/services/app.service';
import { ItineraryService } from '@theta/services/itinerary.service';
import { FreeModeSwiperOptions } from '@theta/shared/config/swiper-options/free-mode-swiper-options';
import { Emoji } from '@theta/shared/emojis';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User;
  favItineraries: Card[];
  emoji = Emoji;
  freeModeSwiperOptions = FreeModeSwiperOptions.config;

  constructor(
    private app: AppService,
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    this.favItineraries = this.itineraryService.toCards(await this.itineraryService.search(null));
    this.user = {
      firstName: 'Christofel',
      lastName: 'Hakim',
      profilePicUrl: '/assets/images/avatars/rabbit.jpg',
      username: 'christofelh',
      email: 'christofelh@gmail.com',
      password: '',
      about: 'Hi there, I am Chris, the quick brown fox jumps over lazy dogs'
    };
  }

  toggleDarkTheme(event) {
    this.app.emitUserDarkTheme(!event.detail.checked);
  }

}
