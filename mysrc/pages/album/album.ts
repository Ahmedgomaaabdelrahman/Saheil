import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllImagesPage } from './../all-images/all-images';


@Component({
  selector: 'page-album',
  templateUrl: 'album.html',
})
export class AlbumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumPage');
  }

  gotodtails(){
    this.navCtrl.push(AllImagesPage);
  }
}
