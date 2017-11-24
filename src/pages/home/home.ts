import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlldoctorsPage } from '../alldoctors/alldoctors';
import { AllclinksPage } from '../allclinks/allclinks';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import { TransportPage } from '../transport/transport';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public common:CommonservicesProvider,public navCtrl: NavController) {
 this.common.getStoredValue('user').then(user=>{
     console.log('user : ',user);
 })
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
}
