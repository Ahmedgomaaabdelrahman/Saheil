import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EdithorsePage } from '../edithorse/edithorse';


@Component({
  selector: 'page-myhorses',
  templateUrl: 'myhorses.html',
})
export class MyhorsesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyhorsesPage');
  }

  edit(){
    this.navCtrl.push(EdithorsePage);
  }
}
