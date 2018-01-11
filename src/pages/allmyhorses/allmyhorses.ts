import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddhorsePage } from './../addhorse/addhorse';



@Component({
  selector: 'page-allmyhorses',
  templateUrl: 'allmyhorses.html',
})
export class AllmyhorsesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllmyhorsesPage');
  }
  add(){
    this.navCtrl.push(AddhorsePage);
  }
  
}
