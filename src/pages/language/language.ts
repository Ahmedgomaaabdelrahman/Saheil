import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AboutsahielPage } from '../aboutsahiel/aboutsahiel';
import { LoadingPage } from '../loading/loading';
import { AlldoctorsPage } from '../alldoctors/alldoctors';

@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }
  gotoNotes(){
    this.navCtrl.push(LoadingPage);
  }

  goDoctors(){
    this.navCtrl.push(AlldoctorsPage);
  }
}
