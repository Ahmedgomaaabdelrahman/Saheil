import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KnowlegedetailsPage } from '../knowlegedetails/knowlegedetails';


@Component({
  selector: 'page-knowlege',
  templateUrl: 'knowlege.html',
})
export class KnowlegePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowlegePage');
  }
  gotodetails(){
    this.navCtrl.push(KnowlegedetailsPage);
  }
}
