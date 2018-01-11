import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChampionsNewsProvider} from "../../providers/champions-news/champions-news";


@Component({
  selector: 'page-onetourdetails',
  templateUrl: 'onetourdetails.html',
})
export class OnetourdetailsPage {
title
  details
  picpath
    winner
    points
    judge
  constructor(public champs:ChampionsNewsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
tDetails
  ionViewWillEnter() {
    this.tDetails=[]
    console.log('ionViewDidLoad OnetourdetailsPage');
    this.champs.getnewsTournaments(this.navParams.data).subscribe(res=>{
        console.log(res[0]);
this.title=res[0].title_ar
        this.details=res[0].details
        this.picpath=res[0].picpath
        this.tDetails=res[0]
        this.winner=res[0].winner
        this.points=res[0].points
        this.judge=res[0].judge
    })
  }

}
