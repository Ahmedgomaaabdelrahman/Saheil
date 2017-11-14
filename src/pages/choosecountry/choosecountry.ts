import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-choosecountry',
  templateUrl: 'choosecountry.html',
})
export class ChoosecountryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosecountryPage');
  }
  goSign(){ 
    this.navCtrl.push(SignupPage);
  }
}
