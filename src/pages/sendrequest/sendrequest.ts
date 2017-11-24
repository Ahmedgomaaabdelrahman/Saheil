import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";

@Component({
  selector: 'page-sendrequest',
  templateUrl: 'sendrequest.html',
})
export class SendrequestPage {
_member_id
    // _member_service_id
  _subject
  _message
  constructor(public common:CommonservicesProvider,public v:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
  let self=this;
  this.common.getStoredValue('user').then(res=>{
      this._member_id=res.member_id

  })
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendrequestPage');

  }
send(){
 let msg={
    'member_id':this._member_id,
  'member_service_id':this.navParams.data,
      'subject':this._subject,
      'message':this._message
  }
  this.v.sendOrder(msg).subscribe(res=>{
    console.log(res)
      if(res['message_id']!=null){
    this.common.presentToast('تم الارسال')}else{
          this.common.presentToast('لم يتم الارسال')
      }
  })
}
}
