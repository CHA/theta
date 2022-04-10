import { Component, OnInit } from '@angular/core';
import { WalletTab } from './wallet-tab.enum';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  selectedTab = WalletTab.bookings;
  walletTabEnum = WalletTab;

  constructor() { }

  ngOnInit() {
  }

  selectTab(event) {
    this.selectedTab = event.detail.value;
  }

}
