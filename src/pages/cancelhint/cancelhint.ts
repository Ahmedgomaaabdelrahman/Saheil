import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ComplainPage } from '../complain/complain';


@Component({
  selector: 'page-cancelhint',
  templateUrl: 'cancelhint.html',
})
export class CancelhintPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelhintPage');
  }
sendcom() 
{
  let modal = this.modalCtrl.create(ComplainPage);
  modal.present();
 }
}
