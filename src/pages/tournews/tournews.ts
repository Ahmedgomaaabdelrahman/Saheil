import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LivestreamPage } from '../livestream/livestream';
import { TourtablesPage } from '../tourtables/tourtables';


@Component({
  selector: 'page-tournews',
  templateUrl: 'tournews.html',
})
export class TournewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournewsPage');
  }

  golive(){
    this.navCtrl.push(LivestreamPage);
  }
  goOne(){
    this.navCtrl.push(TourtablesPage);
  }

}
