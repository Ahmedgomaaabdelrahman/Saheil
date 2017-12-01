import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-cartshopping',
  templateUrl: 'cartshopping.html',
})
export class CartshoppingPage {
sups:any
  constructor(private comman:CommonservicesProvider,public navCtrl: NavController, public navParams: NavParams,private common:CommonservicesProvider) {
  this.sups=[];
  let self=this;
this.common.getStoredValue('cart').then(res=>{
  self.sups=res
  console.log(res)
})
  }

  ionViewDidLoad() {

  }

}
