import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from './../chat/chat';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {ChatProvider} from "../../providers/chat/chat";

@Component({
  selector: 'page-inboxchat',
  templateUrl: 'inboxchat.html',
})
export class InboxchatPage {
member_id
  friends
  constructor(public common:CommonservicesProvider,private chat :ChatProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.common.getStoredValue('user').then(user=>{
    this.member_id=user['member_id'];
  })
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad InboxchatPage');
  this.friends=[]
  this.chat.getMyConversations(this.member_id).subscribe(res=>{
    this.friends=res
  })
  }


  gochat(id){
      this.navCtrl.push(ChatPage,{'mode':1,'id':id})
  }
}
