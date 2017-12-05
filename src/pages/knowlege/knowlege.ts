import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KnowlegedetailsPage } from '../knowlegedetails/knowlegedetails';
import {KnowladgeProvider} from "../../providers/knowladge/knowladge";


@Component({
  selector: 'page-knowlege',
  templateUrl: 'knowlege.html',
})
export class KnowlegePage {
allnews:any
  constructor(public news:KnowladgeProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
  this.allnews=[]
    console.log('ionViewDidLoad KnowlegePage');
    this._getAllnews()

  }
    _getAllnews(){
    this.news.getAllnews().subscribe(res=>{
      console.log(res);
      this.allnews=res
    })
    }
  gotodetails(){
    this.navCtrl.push(KnowlegedetailsPage);
  }
}
