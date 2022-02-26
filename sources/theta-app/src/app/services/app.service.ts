import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {

  private userDarkThemeSource = new Subject<boolean>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  userDarkThemeSource$ = this.userDarkThemeSource.asObservable();

  constructor(
    private router: Router,
    private location: Location
  ) { }


  get assetsPath() {
    return 'assets';
  }

  get imagesPath() {
    return `${this.assetsPath}/images`;
  }

  get avatarsPath() {
    return `${this.imagesPath}/avatars`;
  }

  get backgroundsPath() {
    return `${this.imagesPath}/backgrounds`;
  }

  emitUserDarkTheme(useDarkTheme: boolean) {
    this.userDarkThemeSource.next(useDarkTheme);
  }

  navigateToTab(tab: string) {
    this.router.navigateByUrl(`/tabs/${tab}`);
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(`${url}`);
  }

  toHome(){
    this.router.navigateByUrl('/tabs/home');
  }

  toLoginPage() {
    this.router.navigateByUrl('/login');
  }

  toSignUpPage() {
    this.router.navigateByUrl('/signup');
  }

  back() {
    this.location.back();
  }

}
