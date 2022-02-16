import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '@theta/models/user';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  user: User;
  submitted = false;
  form = new FormGroup({
    email: new FormControl('')
  });

  constructor(
    public router: Router
  ) { }

  toggleShowPassword() {

  }

  signup() {
    this.submitted = true;

    if (this.form.valid) {
      this.router.navigateByUrl('/app/tabs/browse');
    }
  }
}
