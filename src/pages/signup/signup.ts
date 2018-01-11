import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {GetServicesProvider} from "../../providers/get-services/get-services";
import { ChoosecountryPage } from '../choosecountry/choosecountry';
import { ActivecodePage } from '../activecode/activecode';
import {AuthproviderProvider} from "../../providers/authprovider/authprovider";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {HomePage} from "../home/home";



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
    cs:any;

    public countries:any;
    public provideServices:any;
    private _username
    private _mobile
    private _email
    private _password
    private _gcm_regid
    private _country_id
    private _service_id
  constructor(public common:CommonservicesProvider,
              public auth:AuthproviderProvider,public services:GetServicesProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
  ionViewWillEnter(){
      this.cs=[]
      this.services.countryid().then(res=>{
          this.cs=res;
          console.log(res)

      })
      console.log( this.cs)
      this.services.serviceId().then(resS=>{
          this.provideServices=resS
console.log(resS)
      });

  }


    getSelectedService(service){
        this._service_id=service;
        console.log(service);
    }
    getSelectedC(c){
        console.log(c);

        this._country_id=c
    }
    submit(){
    // let user=new User()
    //     this.services.getToken().then(token=>{


        var User={
            username:this._username,
            email:this._email,
            mobile:this._mobile,
            password:this._password,
            // gcm_regid:token,
            gcm_regid:'12342',
            country_id:this._country_id,
            service_id:this._service_id
        }

console.log('user',User);
        this.common.presentLoadingDefault('وف يتم التسجيل برجاء الانتظار')
this.auth.register(User).subscribe(res=>{
    this.common.loadDismess()
    if(res['error']!=null) {
        this.common.presentToast(res['error'])
        console.log(res);
    }else{
        this.common.presentToast('تم التسجيل بنجاح')
        this.common.storeValue('xuser',User)
        //for chck auth
        this.common.storeValue('user',res).then(()=> {
            this.common.eventPublish('auth', true)
        })
        this.navCtrl.setRoot(HomePage)
        console.log('تم التسجيل بنجاح')}
});
        // })
    }
  gotoActive(){
    this.navCtrl.push(ActivecodePage);
  }

}
