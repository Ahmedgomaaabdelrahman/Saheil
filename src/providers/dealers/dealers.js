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
  Generated class for the DealersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DealersProvider = /** @class */ (function () {
    function DealersProvider(url, http) {
        this.url = url;
        this.http = http;
        console.log('Hello VeterinariansProvider Provider');
        this.lang = DomainProvider.lang;
    }
    DealersProvider.prototype.getDealerHourses = function (id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/members/services/details/' + id);
    };
    DealersProvider.prototype.getSingleHorse = function (id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/horse/' + id);
    };
    DealersProvider.prototype.getDealerHoursesDetails = function (id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/members/services/details/' + id);
    };
    DealersProvider.prototype.addHorse = function (horse) {
        return this.http.post(this.url.url + 'api/horses/add/', horse);
    };
    DealersProvider.prototype.gethorseCategoties = function () {
        return this.http.get(this.url.url + 'api/' + this.lang + '/horses/category');
    };
    DealersProvider.prototype.addToUserFav = function (fav) {
        // http://www.sahel-horse.com/api/horses/favorite/add
        return this.http.post(this.url.url + 'api/horses/favorite/add', fav);
    };
    DealersProvider.prototype.deleteHorse = function (horse) {
        return this.http.post(this.url.url + 'api/horses/delete', horse);
        //http://www.sahel-horse.com/api/horses/delete
    };
    DealersProvider.prototype.getHorsesfavorite = function (user) {
        var id = {
            'member_id': user
        };
        return this.http.post(this.url.url + 'api/horses/favorite', id);
        //http://www.sahel-horse.com/api/horses/favorite
    };
    DealersProvider.prototype.manageHorse = function (id) {
        var dealer = {
            'member_id': id
        };
        return this.http.post(this.url.url + 'api/horses/manage', dealer);
        // http://www.sahel-horse.com/api/horses/manage
    };
    DealersProvider.prototype.favoritedelete = function (id, horse_favorite_id) {
        var horse = {
            'member_id': id,
            'horse_favorite_id': horse_favorite_id
        };
        console.log(horse);
        return this.http.post(this.url.url + 'api/horses/favorite/delete', horse);
        // http://www.sahel-horse.com/api/horses/manage
    };
    DealersProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], DealersProvider);
    return DealersProvider;
}());
export { DealersProvider };
//# sourceMappingURL=dealers.js.map