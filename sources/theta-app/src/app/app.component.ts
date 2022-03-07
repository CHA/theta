import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { User } from './models/user';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  dark = false;
  user: User;

  constructor(
    public app: AppService,
    private userService: UserService,
    private menuController: MenuController
  ) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  viewProfile() {
    this.app.toProfilePage();
    this.menuController.close();
  }

  async signout() {
    this.user = await this.userService.logout(this.user);
  }

}
