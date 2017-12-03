import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";


/*
  Generated class for the DealersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DealersProvider {

    lang: any

    constructor(public url: DomainProvider, public http: HttpClient) {
        console.log('Hello VeterinariansProvider Provider');
        this.lang = url.lang;
    }
  getDealerHourses(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/members/services/details/'+id);
    }
    getSingleHorse(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/horse/'+id);
    }
getDealerHoursesDetails(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/members/services/details/'+id);
    }
    addToUserFav(fav){

    }
}
