import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

    lang: any

    constructor(public url: DomainProvider, public http: HttpClient) {
        this.lang = url.lang;

    }
    getPublicChat(index) {
        return this.http.get(this.url.url + 'api/chat/page/'+index);
    }
    sendPublicChat(sender_id,receiver_id,msg,attachments?) {
        let message={
            'sender':sender_id,
            'receiver':receiver_id,
            'message':msg,
            'attachments':attachments
        }
        return this.http.post(this.url.url + 'api/chat/send',message);
    }
    sendPrivateChat(sender_id,receiver_id,msg,attachments?) {
        let message={
            'sender':sender_id,
            'receiver':receiver_id,
            'message':msg,
            'attachments':attachments
        }
        return this.http.post(this.url.url + 'api/chat/send/private',message);
    }
    getMyConversations(member_id) {
        let message={
            'member_id':member_id
        }
        return this.http.post(this.url.url + 'api/chat/friends',message);
    }
    //http://www.sahel-horse.com/api/balance
    //http://www.sahel-horse.com/api/chat/send
    //http://www.sahel-horse.com/api/chat
    //http://www.sahel-horse.com/api/chat/page/1
//http://www.sahel-horse.com/api/chat/private //Post sender,receiver
    //http://www.sahel-horse.com/api/chat/send/private //message,sender,receiver,attachments
    //http://www.sahel-horse.com/api/chat/friends //member_id

}