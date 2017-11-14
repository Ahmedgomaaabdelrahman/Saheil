import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ForgetpassPage } from '../forgetpass/forgetpass';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  forgetPass()
   {
    let modal = this.modalCtrl.create(ForgetpassPage);
    modal.present();
   }
}
