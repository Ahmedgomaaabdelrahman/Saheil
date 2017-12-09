import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the UpcommingEventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpcommingEventsProvider {
    lang: any

    constructor(public url: DomainProvider, public http: HttpClient) {
        this.lang = url.lang;
    }
    allUpcommingEvents(){
        return this.http.get(this.url.url+'api/'+this.lang+'/upcoming/events');
    }
 upcommingEventDetails(id){
     return this.http.get(this.url.url+'api/'+this.lang+'/upcoming/events/'+id);
    }

}
