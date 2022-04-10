import { Injectable } from '@angular/core';
import { Config } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class IonConfigService {
  constructor(private config: Config) { }

  isIos() {
    return this.config.get('mode') === 'ios';
  }

}
