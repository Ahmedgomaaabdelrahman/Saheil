import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctordetailsPage } from '../doctordetails/doctordetails';


@Component({
  selector: 'page-alldoctors',
  templateUrl: 'alldoctors.html',
})
export class AlldoctorsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlldoctorsPage');
  }
  gotodetails(){
   this.navCtrl.push(DoctordetailsPage);
 }
}
