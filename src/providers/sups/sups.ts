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
    lang: any

    constructor(public url: DomainProvider, public http: HttpClient) {
        console.log('Hello VeterinariansProvider Provider');
        this.lang = url.lang;
    }

    getAllSupplies(id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/members/services/details/' + id);
    }

    getSupplyDetail(id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/supply/' + id);
    }

    addSup(item) {

        return this.http.post(this.url.url + 'api/supplies/add/',item);
    }
    getSupsCategoties(){
            return this.http.get(this.url.url + 'api/' + this.lang + '/supplies/category');

    }
    getUserFav(memberId){
let fav={
    "member_id":memberId
}
        return this.http.post(this.url.url+"/api/supplies/favorite",fav)
    }
    addToUserFav(req){

        return this.http.post(this.url.url+"/api/supplies/favorite/add",req)
    }
    deleteToUserFav(req){

        return this.http.post(this.url.url+"/api/supplies/delete",req)
    }
}