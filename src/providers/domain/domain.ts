import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

/*
  Generated class for the DomainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DomainProvider {
public url="http://sahel-horse.com/";
public lang="en";

  constructor(public http: HttpClient) {
    console.log('Hello DomainProvider Provider');
  }

}
