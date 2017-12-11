import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the DiariesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiariesProvider {

    lang: any

    constructor(public url: DomainProvider, public http: HttpClient) {
        this.lang = url.lang;
    }
    getAllDiaries(index){
        // http://www.sahel-horse.com/api/ar/diaries/page/3
        return this.http.get(this.url.url+'api/'+this.lang+'/diaries/page/'+index);
    }
    getAllDiariesDetails(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/diaries/details/'+id);
    } addDiaries(diary){
        return this.http.post(this.url.url+'api/diaries/add/',diary);
    }
}
