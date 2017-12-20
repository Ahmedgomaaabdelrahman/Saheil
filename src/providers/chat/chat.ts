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

    //http://www.sahel-horse.com/api/balance
    //http://www.sahel-horse.com/api/chat/send
    //http://www.sahel-horse.com/api/chat}

}