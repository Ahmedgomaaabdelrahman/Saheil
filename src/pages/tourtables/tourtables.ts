import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetourPage } from './../onetour/onetour';
import {ChampionsNewsProvider} from "../../providers/champions-news/champions-news";


@Component({
  selector: 'page-tourtables',
  templateUrl: 'tourtables.html',
})
export class TourtablesPage {

  constructor(public champs:ChampionsNewsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
tours
  ionViewWillEnter() {
    this.tours=[]
    this.champs.getAllTournaments().subscribe(res=>{
      this.tours=res
    })
    console.log('ionViewDidLoad TourtablesPage');
  }
 
  goone(){

    this.navCtrl.push(OnetourPage);
  }
}
