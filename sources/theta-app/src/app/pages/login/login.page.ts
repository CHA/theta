import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '@theta/services/app.service';
import { UserService } from '@theta/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  submitted = false;
  loginFailed = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private app: AppService,
    private userService: UserService,
  ) { }

  get formControls() { return this.loginForm.controls; }

  ngOnInit() {
  }

  async submit() {
    this.submitted = true;
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    const success = await this.userService.login(username, password);
    if(success) {
      this.app.navigateToTab('home');
    } else {
      this.loginFailed = true;
    }
  }

  signup(){
    this.app.navigateTo('/signup');
  }

}
