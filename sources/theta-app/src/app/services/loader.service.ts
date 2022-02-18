import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor(public loadingController: LoadingController) { }

  async wait() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      backdropDismiss:true
    });
    return loading.present();
  }

  async done() {
    await this.loadingController.dismiss();
  }
}
