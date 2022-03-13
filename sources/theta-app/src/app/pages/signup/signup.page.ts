import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@theta/models/user';
import { AppService } from '@theta/services/app.service';
import { UserService } from '@theta/services/user.service';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  submitted = false;

  signupForm = new FormGroup({
    email: new FormControl('', Validators.email),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  constructor(
    private app: AppService,
    private userService: UserService,
  ) { }

  get formControls() { return this.signupForm.controls; }

  ngOnInit() {
  }

  async signup() {
    this.submitted = true;
    const user: User = {
      email: this.signupForm.controls.email.value,
      firstName: this.signupForm.controls.firstName.value,
      lastName: this.signupForm.controls.lastName?.value,
      password: this.signupForm.controls.password.value
    };
    await this.userService.signup(user);
    this.app.navigateToTab('home');
  }

  login() {
    this.app.navigateTo('/login');
  }

}
