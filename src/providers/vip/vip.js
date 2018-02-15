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
  Generated class for the VipProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VipProvider = /** @class */ (function () {
    function VipProvider(url, http) {
        this.url = url;
        this.http = http;
        this.lang = DomainProvider.lang;
    }
    VipProvider.prototype.getAllfollowup = function () {
        //http://www.sahel-horse.com/api/ar/followup/
        return this.http.get(this.url.url + 'api/' + this.lang + '/followup/');
    };
    VipProvider.prototype.getAllsponsors = function () {
        //http://www.sahel-horse.com/api/ar/sponsors/
        return this.http.get(this.url.url + 'api/' + this.lang + '/sponsors/');
    };
    VipProvider.prototype.getsecurityterms = function () {
        //http://www.sahel-horse.com/api/en/privacy
        return this.http.get(this.url.url + 'api/' + this.lang + '/privacy/');
    };
    VipProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], VipProvider);
    return VipProvider;
}());
export { VipProvider };
//# sourceMappingURL=vip.js.map