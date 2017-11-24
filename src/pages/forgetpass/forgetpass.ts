import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {AuthproviderProvider} from "../../providers/authprovider/authprovider";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {

  constructor(public common:CommonservicesProvider,public auth:AuthproviderProvider,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }
  email:any
  dismiss(){
      console.log(this.email)
let e={'email':this.email}
      this.auth.forgotPassword(e).subscribe(res=>{
      if(res['error'])
        this.common.presentToast(res['error'],)
console.log(res['error'])
    })
    this.viewCtrl.dismiss();
  }
}
