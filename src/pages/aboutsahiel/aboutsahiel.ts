import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {GetServicesProvider} from "../../providers/get-services/get-services";



@Component({
  selector: 'page-aboutsahiel',
  templateUrl: 'aboutsahiel.html',
})
export class AboutsahielPage {

  constructor(public service:GetServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  details_ar
  details_en
  picpath
  ionViewWillEnter() {
    console.log('ionViewDidLoad AboutsahielPage');
    let self=this
    this.service.aboutSahil().then((obj)=>{
      self.details_ar=obj[0].details_ar
      self.details_en=obj[0].details_en
      self.picpath=obj[0].picpath
      console.log(obj)
      console.log( self.picpath)
    })
  }

}
