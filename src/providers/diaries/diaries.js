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
  Generated class for the DiariesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DiariesProvider = /** @class */ (function () {
    function DiariesProvider(url, http) {
        this.url = url;
        this.http = http;
        this.lang = DomainProvider.lang;
    }
    DiariesProvider.prototype.getAllDiaries = function (index) {
        // http://www.sahel-horse.com/api/ar/diaries/page/3
        return this.http.get(this.url.url + 'api/' + this.lang + '/diaries/page/' + index);
    };
    DiariesProvider.prototype.getAllDiariesasc = function (index) {
        // http://www.sahel-horse.com/api/ar/diaries/page/1/asc
        return this.http.get(this.url.url + 'api/' + this.lang + '/diaries/page/' + index + '/asc');
    };
    DiariesProvider.prototype.getAllDiariesDetails = function (id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/diaries/details/' + id);
    };
    DiariesProvider.prototype.addDiaries = function (diary) {
        return this.http.post(this.url.url + 'api/diaries/add/', diary);
    };
    DiariesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], DiariesProvider);
    return DiariesProvider;
}());
export { DiariesProvider };
//# sourceMappingURL=diaries.js.map