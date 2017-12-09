import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NaqldetailsPage } from './../naqldetails/naqldetails';


@Component({
  selector: 'page-naqlbary',
  templateUrl: 'naqlbary.html',
})
export class NaqlbaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NaqlbaryPage');
  }


  gotodetails(){
    this.navCtrl.push(NaqldetailsPage);
  }
}
