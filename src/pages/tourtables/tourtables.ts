import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetourPage } from './../onetour/onetour';


@Component({
  selector: 'page-tourtables',
  templateUrl: 'tourtables.html',
})
export class TourtablesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourtablesPage');
  }
 
  goone(){
    this.navCtrl.push(OnetourPage);
  }
}
