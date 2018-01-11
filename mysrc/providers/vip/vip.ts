import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the VipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VipProvider {

    lang:any
    constructor(public url:DomainProvider,public http: HttpClient) {
        this.lang=url.lang;
    }
    getAllfollowup(){
      //http://www.sahel-horse.com/api/ar/followup/
        return this.http.get(this.url.url+'api/'+this.lang+'/followup/');
    }
    getAllsponsors(){
        //http://www.sahel-horse.com/api/ar/sponsors/
                    return this.http.get(this.url.url+'api/'+this.lang+'/sponsors/');
    }
    getsecurityterms(){
        //http://www.sahel-horse.com/api/en/privacy
                    return this.http.get(this.url.url+'api/'+this.lang+'/privacy/');
    }


}
