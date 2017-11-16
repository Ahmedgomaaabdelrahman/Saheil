import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ForgetpassPage } from '../forgetpass/forgetpass';
import {AuthproviderProvider} from "../../providers/authprovider/authprovider";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {GetServicesProvider} from "../../providers/get-services/get-services";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public auth:AuthproviderProvider,
              public common:CommonservicesProvider,
              public getService:GetServicesProvider,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {

  }
_mobile:any;
  _password:any;
  submit(){
      this.getService.getToken().then(token=>{
          var user={
              mobile:this._mobile,
              password:this._password,
              gcm_regid:token
          }
          this.auth.login(user).subscribe(res=>{
              if(res['error'] !=null){
                  this.common.presentToast(res['error'])}else{
                  this.common.presentToast('مرحبا!')
              }
          })
      })
  }
  ionViewDidLoad() {


    console.log('ionViewDidLoad LoginPage');
  }
  forgetPass()
   {
    let modal = this.modalCtrl.create(ForgetpassPage);
    modal.present();
   }
}
