import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from './../chat/chat';

@Component({
  selector: 'page-inboxchat',
  templateUrl: 'inboxchat.html',
})
export class InboxchatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxchatPage');
  }


  gochat(){
    this.navCtrl.push(ChatPage)
  }
}
