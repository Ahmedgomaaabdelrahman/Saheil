import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';

import 'rxjs/add/operator/map';
import {DomainProvider} from "../domain/domain";
import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";
import {Events, LoadingController, ToastController} from "ionic-angular";

/*
  Generated class for the GetServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetServicesProvider {

  constructor(private fcm: FCM,public domain:DomainProvider,public http: HttpClient) {
    console.log('Hello GetServicesProvider Provider');
  }
countryid():Promise <any>{
      let promise=new Promise((resolve,reject)=>{
          try{
          this.http.get(this.domain.url+"api/"+DomainProvider.lang+"/country").subscribe(
              res=>{resolve(res)}
          )}catch (E){
              reject(E)
          }
      })
 return promise;
}
serviceId():Promise <any>{
    let promise=new Promise((resolve,reject)=>{
        try{
            this.http.get(this.domain.url+"api/"+DomainProvider.lang+"/service").subscribe(
                res=>{resolve(res)}
            )}catch (E){
            reject(E)
        }
    })
    return promise;
}
getToken():Promise<any>{
let promise=new Promise((resolve,reject)=>{
    this.fcm.getToken().then(token=>{
resolve(token)    })
});
return promise;

}

}
