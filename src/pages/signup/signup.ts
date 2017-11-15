import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GetServicesProvider} from "../../providers/get-services/get-services";
// import {User} from "../../models/user/user";



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    public countries:any;
    public provideServices:any;
    private _username
    private _mobile
    private _email
    private _password
    private _gcm_regid
    private _country_id
    private _service_id
  constructor(public services:GetServicesProvider,public navCtrl: NavController, public navParams: NavParams) {
        // console.log(this.services.country_id)

      this.services.countryid().then(resC=>{
          this.countries=resC
      });
      // this.services.serviceId().then(resS=>{
      //     this.provideServices=resS
      // });
  }
  ionViewWillEnter(){
      // this.services.countryid().then(resC=>{
      //     this.countries=resC
      // });
      this.services.serviceId().then(resS=>{
          this.provideServices=resS
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
    getSelected(country:any){
        this._country_id=country.country_id;
        console.log(country);
    }
    getSelectedService(service){
        this._service_id=service;
        console.log(service);
    }

    submit(){
    let User={
       username:this._username,
        email:this._email,
       mobile:this._mobile,
     password:this._password,
            gsm_regid:this._gcm_regid,
           country_id:this._country_id   ,
    service_id:'6'
        }
    User.username=this._username;
    User.email=this._email;
    User.mobile=this._mobile;
    User.password=this._password;
        User.gsm_regid=this._gcm_regid;
        User.country_id=this._country_id;
    // User.service_id=this._service_id;
        
console.log('user',User);
    }
}
