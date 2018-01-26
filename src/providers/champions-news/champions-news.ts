import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the ChampionsNewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChampionsNewsProvider {
    lang:any
    constructor(public url:DomainProvider,public http: HttpClient) {
      this.lang = DomainProvider.lang;
    }
    getAllTournaments(){
        return this.http.get(this.url.url + 'api/' + this.lang + '/tournaments' );

      // return this.http.get(this.url.url + 'api/' + this.lang + '/upcoming/events/new' );

    }
    getnewsTournaments(news_id){
        return this.http.get(this.url.url + 'api/' + this.lang + '/tournaments/'+news_id);

    }
    live(){
        return this.http.get(this.url.url + 'api/live');

    }

}
