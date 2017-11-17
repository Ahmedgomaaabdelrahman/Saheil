import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {AuthproviderProvider} from "../../providers/authprovider/authprovider";


@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {

  constructor(public auth:AuthproviderProvider,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }
  email:any
  dismiss(){
    this.auth.forgotPassword(this.email).subscribe(res=>{

    })
    this.viewCtrl.dismiss();
  }
}
