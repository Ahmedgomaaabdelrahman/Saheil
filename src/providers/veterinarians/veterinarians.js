var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomainProvider } from "../domain/domain";
/*
  Generated class for the VeterinariansProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VeterinariansProvider = /** @class */ (function () {
    function VeterinariansProvider(url, http) {
        this.url = url;
        this.http = http;
        console.log('Hello VeterinariansProvider Provider');
        this.lang = DomainProvider.lang;
    }
    VeterinariansProvider.prototype.getAllServices = function (id) {
        //http://www.sahel-horse.com/api/ar/members/services/4
        return this.http.get(this.url.url + 'api/' + this.lang + '/members/services/' + id);
    };
    VeterinariansProvider.prototype.getVeterinarianDetail = function (id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/members/services/details/' + id);
    };
    VeterinariansProvider.prototype.sendOrder = function (msg) {
        return this.http.post(this.url.url + 'api/send/message/', msg);
    };
    VeterinariansProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], VeterinariansProvider);
    return VeterinariansProvider;
}());
export { VeterinariansProvider };
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
//# sourceMappingURL=veterinarians.js.map