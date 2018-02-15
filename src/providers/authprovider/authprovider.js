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
  Generated class for the AuthproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthproviderProvider = /** @class */ (function () {
    function AuthproviderProvider(url, http) {
        this.url = url;
        this.http = http;
        console.log('Hello AuthproviderProvider Provider');
    }
    AuthproviderProvider.prototype.register = function (user) {
        return this.http.post(this.url.url + '/api/register/', user);
    };
    AuthproviderProvider.prototype.login = function (user) {
        return this.http.post(this.url.url + '/api/login/', user);
    };
    AuthproviderProvider.prototype.forgotPassword = function (email) {
        return this.http.post(this.url.url + '/api/forgot/password/', email);
    };
    AuthproviderProvider.prototype.updateInfo = function (user) {
        return this.http.post(this.url.url + "/api/update/info", user);
    };
    AuthproviderProvider.prototype.logout = function (id) {
        return this.http.post(this.url.url + "/api/logout", id);
    };
    AuthproviderProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], AuthproviderProvider);
    return AuthproviderProvider;
}());
export { AuthproviderProvider };
//# sourceMappingURL=authprovider.js.map