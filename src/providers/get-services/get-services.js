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
import { FCM } from '@ionic-native/fcm';
import 'rxjs/add/operator/map';
import { DomainProvider } from "../domain/domain";
/*
  Generated class for the GetServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GetServicesProvider = /** @class */ (function () {
    function GetServicesProvider(fcm, domain, http) {
        this.fcm = fcm;
        this.domain = domain;
        this.http = http;
        console.log('Hello GetServicesProvider Provider');
    }
    GetServicesProvider.prototype.countryid = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            try {
                _this.http.get(_this.domain.url + "api/" + DomainProvider.lang + "/country").subscribe(function (res) { resolve(res); });
            }
            catch (E) {
                reject(E);
            }
        });
        return promise;
    };
    GetServicesProvider.prototype.serviceId = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            try {
                _this.http.get(_this.domain.url + "api/" + DomainProvider.lang + "/service").subscribe(function (res) { resolve(res); });
            }
            catch (E) {
                reject(E);
            }
        });
        return promise;
    };
    GetServicesProvider.prototype.aboutSahil = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            try {
                //http://www.sahel-horse.com/api/ar/aboutus
                _this.http.get(_this.domain.url + "api/" + DomainProvider.lang + "/aboutus").subscribe(function (res) { resolve(res); });
            }
            catch (E) {
                reject(E);
            }
        });
        return promise;
    };
    GetServicesProvider.prototype.serviceDetails = function () {
        return this.http.get(this.domain.url + "api/" + DomainProvider.lang + "/service");
    };
    GetServicesProvider.prototype.getToken = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.fcm.getToken().then(function (token) {
                resolve(token);
            });
        });
        return promise;
    };
    GetServicesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [FCM, DomainProvider, HttpClient])
    ], GetServicesProvider);
    return GetServicesProvider;
}());
export { GetServicesProvider };
//# sourceMappingURL=get-services.js.map