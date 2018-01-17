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
    this.lang=url.getLang();
  }
    getAllServices(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/members/services/'+id);
    }
    getVeterinarianDetail(id){
        return this.http.get(this.url.url+'api/'+this.lang+'/members/services/details/'+id);
    }
    sendOrder(msg){
        return this.http.post(this.url.url+'api/send/message/',msg);

    }
}
//
//             "key": "member_id",
//             "value": "1",
//             "description": "suppose that visitor must be login (Member ID)",
//             "type": "text"
//         },
//         {
//             "key": "member_service_id",
//             "value": "1",
//             "description": "Member Service ID",
//             "type": "text"
//         },
//         {
//             "key": "subject",
//             "value": "مواعيد العمل ",
//             "description": "",
//             "type": "text"
//         },
//         {
//             "key": "message",
//             "value": "ماهي مواعيد العمل اليومية والاسبوعية",
//             "description": "",
//             "type": "text"
//         }
//     ]
// },