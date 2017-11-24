import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AirtransdetailsPage } from '../airtransdetails/airtransdetails';


@Component({
  selector: 'page-airtansport',
  templateUrl: 'airtansport.html',
})
export class AirtansportPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AirtansportPage');
  }
  gotodetails(){
    this.navCtrl.push(AirtransdetailsPage);
  }
}
