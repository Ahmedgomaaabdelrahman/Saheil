import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the GetServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetServicesProvider {

  constructor(public domain:DomainProvider,public http: HttpClient) {
    console.log('Hello GetServicesProvider Provider');
  }
countryid():Promise <any>{
      let promise=new Promise((resolve,reject)=>{
          try{
          this.http.get(this.domain.url+"api/"+this.domain.lang+"/country").subscribe(
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
            this.http.get(this.domain.url+"api/"+this.domain.lang+"/service").subscribe(
                res=>{resolve(res)}
            )}catch (E){
            reject(E)
        }
    })
    return promise;
}
}
