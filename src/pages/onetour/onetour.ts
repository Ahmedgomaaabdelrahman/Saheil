import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetourdetailsPage } from './../onetourdetails/onetourdetails';


@Component({
  selector: 'page-onetour',
  templateUrl: 'onetour.html',
})
export class OnetourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnetourPage');
  }
  
  gotodetails(){
    this.navCtrl.push(OnetourdetailsPage);
  }
}
