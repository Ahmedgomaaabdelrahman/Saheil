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
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
/*
  Generated class for the DomainProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DomainProvider = /** @class */ (function () {
    function DomainProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.url = "http://sahel-horse.com/";
        console.log('Hello DomainProvider Provider');
        // if(this.lang==null){
        //   this.storage.get('lang').then(lang=>{
        //     if(lang !== null)
        //     this.lang=lang
        //       else this.lang='ar'
        //   })
        // }
    }
    DomainProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, HttpClient])
    ], DomainProvider);
    return DomainProvider;
}());
export { DomainProvider };
//# sourceMappingURL=domain.js.map