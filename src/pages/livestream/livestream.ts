import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChampionsNewsProvider} from "../../providers/champions-news/champions-news";


@Component({
  selector: 'page-livestream',
  templateUrl: 'livestream.html',
})
export class LivestreamPage {

  constructor(public champs:ChampionsNewsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
title
    details
    stream
    ionViewWillEnter() {

    this.champs.live().subscribe(res=>{
this.stream=res[0]['stream']
        this.details=res[0]['details']
        this.title=res[0]['title']
        console.log();
        console.log('reeees',res);

    })
  }

}
