import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private menuController: MenuController,
    private router: Router
  ) {
    this.router.events.subscribe(() => this.user = this.userService.userToken?.user);
  }

  ngOnInit(): void {
    this.user = this.userService.userToken.user;
  }

  viewProfile() {
    this.app.toProfilePage();
    this.menuController.close();
  }

  signout() {
    this.user = this.userService.logout();
  }

}
