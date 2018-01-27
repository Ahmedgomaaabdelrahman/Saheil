import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PaypalProvider} from "../../providers/paypal/paypal";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-daf3',
  templateUrl: 'daf3.html',
})
export class Daf3Page {
private member_id
  private amount
  flag:boolean
  private YOUR_PRODUCTION_CLIENT_ID
  private YOUR_SANDBOX_CLIENT_ID
  constructor(private common:CommonservicesProvider,private pay:PaypalProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter(){
this.common.getStoredValue('user').then(user=>{
  if(user !=null){

      this.member_id=user.member_id
  this.flag=true;
  }else {
    this.flag=false
  }
})
    // console.log('ionViewDidLoad Daf3Page');
  }
    submit(){
  if(this.member_id !=null){
    this.pay.getKeys().subscribe(res=> {
      console.log( res['PRODUCTION_CLIENT_ID'])
      this.pay.pay(this.member_id, this.amount, 'تمت العملية بنجاح', 'فشلت العملية', res['PRODUCTION_CLIENT_ID'], res['SANDBOX_CLIENT_ID'])
    })
  }
    }
}
