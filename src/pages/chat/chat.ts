import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
msgs
  constructor(private common:CommonservicesProvider,private chat:ChatProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
member_id
  ionViewWillEnter() {
  this.common.getStoredValue('user').then(res=>{
    this.member_id=res.member_id
      console.log(this.member_id)

  })
this.msgs=[]
    console.log('ionViewDidLoad ChatPage');
this.chat.getPublicChat().subscribe(res=>{
  this.msgs=res
 console.log(res)
});
  }

}
