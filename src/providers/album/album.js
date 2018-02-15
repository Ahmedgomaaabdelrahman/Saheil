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
  Generated class for the AlbumProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlbumProvider = /** @class */ (function () {
    function AlbumProvider(url, http) {
        this.url = url;
        this.http = http;
        this.lang = DomainProvider.lang;
    }
    AlbumProvider.prototype.homeSlider = function () {
        //http://www.sahel-horse.com/api/ar/slider
        return this.http.get(this.url.url + 'api/' + this.lang + '/slider');
    };
    AlbumProvider.prototype.getcategory = function () {
        // http://www.sahel-horse.com/api/ar/gallery/category
        return this.http.get(this.url.url + 'api/' + this.lang + '/gallery/category');
    };
    AlbumProvider.prototype.getgallery = function () {
        // http://www.sahel-horse.com/api/ar/gallery
        return this.http.get(this.url.url + 'api/' + this.lang + '/gallery');
    };
    AlbumProvider.prototype.getimage = function (id) {
        // http://www.sahel-horse.com/api/ar/gallery/1
        return this.http.get(this.url.url + 'api/' + this.lang + '/gallery/' + id);
    };
    AlbumProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], AlbumProvider);
    return AlbumProvider;
}());
export { AlbumProvider };
//# sourceMappingURL=album.js.map