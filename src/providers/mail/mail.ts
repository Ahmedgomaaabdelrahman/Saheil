import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the MailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MailProvider {
    lang:any
    constructor(public url:DomainProvider,public http: HttpClient) {
        console.log('Hello VeterinariansProvider Provider');
        this.lang=url.lang;
    }
    getMyInbox(id){
        let mail={
            'member_id':id
        }
        return this.http.post(this.url.url+'api/messages/sent/',mail);
    }
    getMsgDetails(msg,member_id){
        let mail={
            'member_id':member_id,
            'message_id':msg.message_id
        }
        return this.http.post(this.url.url+'/api/view/message/',mail);
    }

}