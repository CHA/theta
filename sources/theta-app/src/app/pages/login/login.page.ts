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

  loading = false;
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
    this.loading = true;
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;
    try {
      await this.userService.login(username, password);
      this.app.toHome();
    } catch {
      this.loginFailed = true;
    } finally {
      this.loading = false;
    }
  }

  signup(){
    this.app.toSignUpPage();
  }

}
