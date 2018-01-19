import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";

/*
  Generated class for the AlbumProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlbumProvider {
    lang: any

    constructor(public url: DomainProvider, public http: HttpClient) {

        this.lang = DomainProvider.lang;
    }
homeSlider(){
        //http://www.sahel-horse.com/api/ar/slider
    return this.http.get(this.url.url+'api/'+this.lang+'/slider');

}
getcategory(){
    // http://www.sahel-horse.com/api/ar/gallery/category
        return this.http.get(this.url.url+'api/'+this.lang+'/gallery/category');

}
getgallery(){
    // http://www.sahel-horse.com/api/ar/gallery
        return this.http.get(this.url.url+'api/'+this.lang+'/gallery');

}
getimage(id){
    // http://www.sahel-horse.com/api/ar/gallery/1
        return this.http.get(this.url.url+'api/'+this.lang+'/gallery/'+id);

}
}
