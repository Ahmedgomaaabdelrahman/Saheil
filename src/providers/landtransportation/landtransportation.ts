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

    public static CONTINUE:string='continue';
    public static CANCEL:string='cancel';
    public static FINISH:string='finish';
    public static CONFIRM:string='confirm';
    lang:any
    constructor(public url:DomainProvider,public http: HttpClient) {
        this.lang=url.lang;
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
