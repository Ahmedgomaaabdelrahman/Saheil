import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the LandtransportationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LandtransportationProvider {
//http://sahel-horse.com/api/transport/order
    //http://sahel-horse.com/api/transport/order/confirm
    //http://sahel-horse.com/api/transport/order/complaint
    //http://sahel-horse.com/api/transport/order/history
    //http://sahel-horse.com/api/transport/order/history/provider

    public  CONTINUE:string='continue';
    public  CANCEL:string='cancel';
    public  FINISH:string='finish';
    public  CONFIRM:string='confirm';
    lang:any
    constructor(public url:DomainProvider,public http: HttpClient) {
      this.lang = DomainProvider.lang;
    }
    sendOrder(msg){
        return this.http.post(this.url.url+'api/transport/order',msg);

    }
    customerConfirm(msg){
        //order_id
        //status
        return this.http.post(this.url.url+'api/transport/order/confirm',msg);

    }
    customerComplaint(msg){
        //member_id
        //order_id
        //message
        return this.http.post(this.url.url+'api/transport/order/complaint',msg);

    }
    customerHistory(msg){
        //member_id

        return this.http.post(this.url.url+'api/transport/order/history',msg);

    }
    transporterHistory(msg){
        //member_id

        return this.http.post(this.url.url+'api/transport/order/history/provider',msg);

    }
}
