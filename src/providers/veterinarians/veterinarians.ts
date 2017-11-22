import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the VeterinariansProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VeterinariansProvider {
lang:any
  constructor(public url:DomainProvider,public http: HttpClient) {
    console.log('Hello VeterinariansProvider Provider');
    this.lang=url.lang;
  }
    getAllVeterinarians(){
        return this.http.get(this.url.url+'api/'+this.lang+'/veterinarians');
    }
    getVeterinarianDetail(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/veterinarian/'+id);
    }
}
