import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddhorsedaysPage } from '../addhorsedays/addhorsedays';


@Component({
  selector: 'page-horsedays',
  templateUrl: 'horsedays.html',
})
export class HorsedaysPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorsedaysPage');
  }
addnew(){
  this.navCtrl.push(AddhorsedaysPage);
}
}
