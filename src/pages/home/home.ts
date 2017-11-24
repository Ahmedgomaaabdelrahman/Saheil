import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import { AlldoctorsPage } from '../alldoctors/alldoctors';
import { AllclinksPage } from '../allclinks/allclinks';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import { TransportPage } from '../transport/transport';
import {AirtansportPage} from "../airtansport/airtansport";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public menuCtrl:MenuController,public common:CommonservicesProvider,public navCtrl: NavController) {
      this.menuCtrl.enable(true)

      this.common.getStoredValue('user').then(user=>{
     console.log('user : ',user);
 })

  }
  ionViewWillEnter(){
      this.menuCtrl.enable(true)

  }
  gotodoctors(){
   this.navCtrl.push(AlldoctorsPage);
  }
  gotoclincs(){
    this.navCtrl.push(AllclinksPage);
  }
  goTrans(){
    this.navCtrl.push(TransportPage);
  }
    goTransAir(){
        this.navCtrl.push(AirtansportPage);

    }
}
