import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the KnowladgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KnowladgeProvider {
lang:any
  constructor(public url:DomainProvider,public http: HttpClient) {
    console.log('Hello KnowladgeProvider Provider');
    this.lang = DomainProvider.lang;
  }
  getAllnews(){
          return this.http.get(this.url.url + 'api/' + this.lang + '/news' );
}
getnewsDetails(news_id){
        return this.http.get(this.url.url + 'api/' + this.lang + '/news/'+news_id);

  }
}
