import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import {GetServicesProvider} from "../../providers/get-services/get-services";


@Component({
  selector: 'page-choosecountry',
  templateUrl: 'choosecountry.html',
})
export class ChoosecountryPage {
countries:any;
  constructor(public service:GetServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
    submit(country){
        this.navCtrl.push(SignupPage,country);

    }
ionViewWillEnter(){
    this.countries=[]
    this.service.countryid().then(res=>{
      this.countries=res;

    })
    console.log( this.countries)
}


}
