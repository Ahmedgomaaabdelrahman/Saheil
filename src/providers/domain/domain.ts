import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';

/*
  Generated class for the DomainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DomainProvider {
public url="http://sahel-horse.com/";
public static lang;

  constructor(public storage:Storage,public http: HttpClient) {
    console.log('Hello DomainProvider Provider');
    // if(this.lang==null){
    //   this.storage.get('lang').then(lang=>{
    //     if(lang !== null)
    //     this.lang=lang
    //       else this.lang='ar'
    //   })
    // }
  }


}
