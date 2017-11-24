import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";

@Component({
  selector: 'page-sendrequest',
  templateUrl: 'sendrequest.html',
})
export class SendrequestPage {
_member_id
    _member_service_id
  _subject
  _message
  constructor(public common:CommonservicesProvider,private v:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
  // this.common.getStoredValue('user').then()
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendrequestPage');

  }
send(){
  msg={
    'member_id':this._member_id,
  'member_service_id':this.navParams.data,
      'subject':this._subject,
      'message':this._message
  }
  this.v.sendOrder(msg).subscribe(res=>{
    console.log(res)
    this.common.presentToast(res[0])
  })
}
}
