import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorsesuppPage } from '../horsesupp/horsesupp';

@Component({
  selector: 'page-allsupp',
  templateUrl: 'allsupp.html',
})
export class AllsuppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllsuppPage');
  }

  details(){
    this.navCtrl.push(HorsesuppPage);
  }
}
