import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-transportionhisdetails',
  templateUrl: 'transportionhisdetails.html',
})
export class TransportionhisdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportionhisdetailsPage');
  }

}
