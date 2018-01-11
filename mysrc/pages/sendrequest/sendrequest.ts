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
    flag:boolean
  constructor(public common:CommonservicesProvider,public v:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.flag=false
  let self=this;
  this.common.getStoredValue('user').then(res=>{
      if(res!=null){


          this._member_id=res.member_id
          this.flag=true}else{this.flag=false
          // this._member_id=res['member_id']

      }

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
