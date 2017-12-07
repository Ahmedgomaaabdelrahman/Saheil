import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagedetailsPage } from './../imagedetails/imagedetails';


@Component({
  selector: 'page-all-images',
  templateUrl: 'all-images.html',
})
export class AllImagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllImagesPage');
  }
  gotodtails(){
    this.navCtrl.push(ImagedetailsPage);
  } 
}
