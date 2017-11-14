import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosecountryPage } from '../choosecountry/choosecountry';
import { ActivecodePage } from '../activecode/activecode';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  gotoActive(){
    this.navCtrl.push(ActivecodePage);
  }
}
