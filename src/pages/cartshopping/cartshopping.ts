import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-cartshopping',
  templateUrl: 'cartshopping.html',
})
export class CartshoppingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private common:CommonservicesProvider) {

  }

  ionViewDidLoad() {

  }

}
