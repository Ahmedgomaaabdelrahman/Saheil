import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the AuthproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthproviderProvider {

  constructor(public url:DomainProvider,public http: HttpClient) {
    console.log('Hello AuthproviderProvider Provider');
  }
register(user){
    return this.http.post(this.url.url+'/api/register/',user);
}
}
