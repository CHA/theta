import { Component, OnInit } from '@angular/core';
import { Card } from '@theta/models/card';
import { Itinerary } from '@theta/models/itinerary';
import { User } from '@theta/models/user';
import { AppService } from '@theta/services/app.service';
import { ItineraryService } from '@theta/services/itinerary.service';
import { UserService } from '@theta/services/user.service';
import { FreeModeSwiperOptions } from '@theta/shared/config/swiper-options/free-mode-swiper-options';
import { Emoji } from '@theta/shared/emojis';
import { ProfileTab } from './profile-tab.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  favItineraries: Itinerary[];
  itineraries: Itinerary[];
  profileTabEnum = ProfileTab;
  selectedTab = ProfileTab.itineraries;
  user: User;
  emoji = Emoji;

  constructor(
    private app: AppService,
    private userService: UserService,
    private itineraryService: ItineraryService
  ) { }

  async ngOnInit() {
    this.favItineraries = await this.itineraryService.search(null);
    this.user = this.userService.user;
  }

  selectTab(event) {
    this.selectedTab = event.detail.value;
  }


}
