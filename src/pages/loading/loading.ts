import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HeaderComponent } from "../../components/header/header";
import { SubheaderComponent } from "../../components/subheader/subheader";
import { AboutsahielPage } from "../aboutsahiel/aboutsahiel";
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";
import { ChoosecountryPage } from '../choosecountry/choosecountry';


@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
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
}
