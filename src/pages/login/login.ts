import { Component } from '@angular/core';
import {NavController, NavParams, ModalController, MenuController} from 'ionic-angular';
import { ForgetpassPage } from '../forgetpass/forgetpass';
import {AuthproviderProvider} from "../../providers/authprovider/authprovider";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {GetServicesProvider} from "../../providers/get-services/get-services";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public menuCtrl:MenuController,
      public auth:AuthproviderProvider,
              public common:CommonservicesProvider,
              public getService:GetServicesProvider,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
      this.menuCtrl.enable(false)
  }
    _save:any;
_mobile:any;
  _password:any;
  loadingMSG='برجاء الانتظار'
    succsesMSG='مرحباّ!'
  submit(){
      console.log(this._save)
      // this.getService.getToken().then(token=>{
          var user={
              mobile:this._mobile,
              password:this._password,
              gcm_regid:'123456'
          }
          this.common.presentLoadingDefault(this.loadingMSG)
          this.auth.login(user).subscribe(res=>{
              if(res['error'] !=null){
                  this.common.loadDismess();
                  this.common.presentToast(res['error'])}else{
if(this._save){
                  this.common.storeValue('user',res)}
                  this.common.loadDismess();
                  this.common.presentToast(this.succsesMSG)
                  console.log(res)
this.navCtrl.setRoot(HomePage,res)
              }
          })
      // })
  }
  ionViewWillEnter(){
      this.menuCtrl.enable(false)

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
