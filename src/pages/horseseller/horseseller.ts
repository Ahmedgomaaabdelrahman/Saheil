import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorsesPage } from '../horses/horses';


@Component({
  selector: 'page-horseseller',
  templateUrl: 'horseseller.html',
})
export class HorsesellerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorsesellerPage');
  }
gotodetails(){
  this.navCtrl.push(HorsesPage);
}
}
