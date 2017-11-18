import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClinkdetailsPage } from '../clinkdetails/clinkdetails';


@Component({
  selector: 'page-allclinks',
  templateUrl: 'allclinks.html',
})
export class AllclinksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllclinksPage');
  }
  gotodetails(){
    this.navCtrl.push(ClinkdetailsPage);
  }
}
