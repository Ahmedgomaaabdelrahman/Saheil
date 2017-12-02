import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditproductPage } from '../editproduct/editproduct';

@Component({
  selector: 'page-sellerproducts',
  templateUrl: 'sellerproducts.html',
})
export class SellerproductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SellerproductsPage');
  }

  edit(){
    this.navCtrl.push(EditproductPage);
  }
}
