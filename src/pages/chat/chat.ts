import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
msgs
  constructor(private chat:ChatProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewWillEnter() {
this.msgs=[]
    console.log('ionViewDidLoad ChatPage');
this.chat.getPublicChat().subscribe(res=>{
  this.msgs=res
 console.log(res)
});
  }

}
