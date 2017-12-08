import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NextevedetailsPage } from './../nextevedetails/nextevedetails';


@Component({
  selector: 'page-nextevents',
  templateUrl: 'nextevents.html',
})
export class NexteventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NexteventsPage');
  }
  gotodetails(){
    this.navCtrl.push(NextevedetailsPage);
  }
}
