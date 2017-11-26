import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerdetailsPage } from '../sellerdetails/sellerdetails';



@Component({
  selector: 'page-hrssupsellers',
  templateUrl: 'hrssupsellers.html',
})
export class HrssupsellersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HrssupsellersPage');
  }
  gotodetails(){
    this.navCtrl.push(SellerdetailsPage);
  }
}
