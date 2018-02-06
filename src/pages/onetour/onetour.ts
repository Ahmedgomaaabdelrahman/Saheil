import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetourdetailsPage } from './../onetourdetails/onetourdetails';
import {ChampionsNewsProvider} from "../../providers/champions-news/champions-news";


@Component({
  selector: 'page-onetour',
  templateUrl: 'onetour.html',
})
export class OnetourPage {

  constructor(public champs:ChampionsNewsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
    tours
    ionViewWillEnter() {
        this.tours=[]
        this.champs.getAllTournaments().subscribe(res=>{
          console.log('ee',res)
            this.tours=res
        })
        console.log('ionViewDidLoad TourtablesPage');
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OnetourPage');
  }

  gotodetails(id){
    this.navCtrl.push(OnetourdetailsPage,id);
  }
}
