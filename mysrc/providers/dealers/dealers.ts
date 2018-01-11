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
    addHorse(horse){
            return this.http.post(this.url.url+'api/horses/add/',horse);

    }
    gethorseCategoties(){
            return this.http.get(this.url.url+'api/'+this.lang+'/horses/category');

    }
    addToUserFav(fav){
        // http://www.sahel-horse.com/api/horses/favorite/add
        return this.http.post(this.url.url+'api/horses/favorite/add',fav);

    }
    deleteHorse(horse){
        return this.http.post(this.url.url+'api/horses/delete',horse);
        //http://www.sahel-horse.com/api/horses/delete
    }
    getHorsesfavorite(user){
        let id={
            'member_id':user
        }
        return this.http.post(this.url.url+'api/horses/favorite',id);
        //http://www.sahel-horse.com/api/horses/favorite
                }
    manageHorse(id){
        let dealer={
            'member_id':id
        }
        return this.http.post(this.url.url+'api/horses/manage',dealer);
    // http://www.sahel-horse.com/api/horses/manage
       }  favoritedelete(id,horse_favorite_id){
        let horse={
            'member_id':id,
            'horse_favorite_id':horse_favorite_id
        }
        console.log(horse)

        return this.http.post(this.url.url+'api/horses/favorite/delete',horse);
    // http://www.sahel-horse.com/api/horses/manage
       }
}
