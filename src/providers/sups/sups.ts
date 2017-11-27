import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the SupsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SupsProvider {
    lang:any
    constructor(public url:DomainProvider,public http: HttpClient) {
        console.log('Hello VeterinariansProvider Provider');
        this.lang=url.lang;
    }
    getAllSupplies(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/members/services/details/'+id);
    }
    getSupplyDetail(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/supply/'+id);
    }
}
