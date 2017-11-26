import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsuldetailsPage } from '../consuldetails/consuldetails';



@Component({
  selector: 'page-consultation',
  templateUrl: 'consultation.html',
})
export class ConsultationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationسPage');
  }
gotodetails(){
  this.navCtrl.push(ConsuldetailsPage);
}
}
