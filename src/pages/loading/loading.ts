import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import { HeaderComponent } from "../../components/header/header";
import { SubheaderComponent } from "../../components/subheader/subheader";
import { AboutsahielPage } from "../aboutsahiel/aboutsahiel";
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";
import { ChoosecountryPage } from '../choosecountry/choosecountry';
import { HomePage } from '../home/home';
import { EditaccountPage } from '../editaccount/editaccount';
import { TransportPage } from '../transport/transport';
import { HorsesuppPage } from '../horsesupp/horsesupp';
import { AllsuppPage } from '../allsupp/allsupp';
import { KnowlegePage } from '../knowlege/knowlege'; 

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
  this.menuCtrl.enable(false)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }
    ionViewWillEnter(){
        this.menuCtrl.enable(false)

    }
 gotoNotes(){
   this.navCtrl.push(AboutsahielPage);
 }
  
 goSignin(){
   this.navCtrl.push(LoginPage);
 }

 chooseCountry(){
  this.navCtrl.push(ChoosecountryPage);
}

gohome(){
  this.navCtrl.push(KnowlegePage);
}
}
