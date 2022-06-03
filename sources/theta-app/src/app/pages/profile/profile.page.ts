import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Card } from '@theta/models/card';
import { Itinerary } from '@theta/models/itinerary';
import { User } from '@theta/models/user';
import { AppService } from '@theta/services/app.service';
import { ItineraryService } from '@theta/services/itinerary.service';
import { UserService } from '@theta/services/user.service';
import { FreeModeSwiperOptions } from '@theta/shared/config/swiper-options/free-mode-swiper-options';
import { Emoji } from '@theta/shared/emojis';
import { CreateItineraryModalComponent } from './create-itinerary-modal/create-itinerary-modal.component';
import { ProfileTab } from './profile-tab.enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  @ViewChild('#createModal') createModal: ElementRef;
  favItineraries: Itinerary[];
  itineraries: Itinerary[];
  profileTabEnum = ProfileTab;
  selectedTab = ProfileTab.itineraries;
  user: User;
  emoji = Emoji;
  isCreateModalOpen = false;

  constructor(
    private app: AppService,
    private userService: UserService,
    private itineraryService: ItineraryService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    this.favItineraries = await this.itineraryService.search(null);
    this.user = this.userService.userToken.user;
  }

  selectTab(event) {
    this.selectedTab = event.detail.value;
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: CreateItineraryModalComponent,
      breakpoints: [0.1, 0.3, 1],
      initialBreakpoint: 0.3,
      swipeToClose: true,
    });
    return await modal.present();
  }

  onClose() {
    this.modalController.dismiss();
  }

  onContinue() {
    console.log('test');
    const { nativeElement } = this.createModal;
    if (!nativeElement) {
      return;
    }
    nativeElement.setCurrentBreakpoint(0.9);
  }
}
