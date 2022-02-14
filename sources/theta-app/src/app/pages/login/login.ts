import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { User } from '@theta/models/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  user: User;
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  login() {

  }

  signup() {
    this.router.navigateByUrl('/signup');
  }
}
