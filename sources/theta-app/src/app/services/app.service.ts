import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {

  private userDarkThemeSource = new Subject<boolean>();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  userDarkThemeSource$ = this.userDarkThemeSource.asObservable();

  constructor() { }

  emitUserDarkTheme(useDarkTheme: boolean) {
    this.userDarkThemeSource.next(useDarkTheme);
  }

  assetsPath() {
    return 'assets';
  }

  imagesPath() {
    return `${this.assetsPath()}/images`;
  }

  avatarsPath() {
    return `${this.imagesPath()}/avatars`;
  }

  backgroundsPath() {
    return `${this.imagesPath()}/backgrounds`;
  }

}
