import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RatePage } from '../rate/rate';


@Component({
  selector: 'page-fee',
  templateUrl: 'fee.html',
})
export class FeePage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeePage');
  }
  rate()
  {
   let modal = this.modalCtrl.create(RatePage);
   modal.present();
  }
  
}
