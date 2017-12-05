import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritePage } from '../favorite/favorite';


@Component({
  selector: 'page-favtype',
  templateUrl: 'favtype.html',
})
export class FavtypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavtypePage');
  }
  gofav(){ 
    this.navCtrl.push(FavoritePage);
  }
}
