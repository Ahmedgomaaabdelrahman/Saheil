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
  Generated class for the LandtransportationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LandtransportationProvider = /** @class */ (function () {
    function LandtransportationProvider(url, http) {
        this.url = url;
        this.http = http;
        //http://sahel-horse.com/api/transport/order
        //http://sahel-horse.com/api/transport/order/confirm
        //http://sahel-horse.com/api/transport/order/complaint
        //http://sahel-horse.com/api/transport/order/history
        //http://sahel-horse.com/api/transport/order/history/provider
        this.CONTINUE = 'continue';
        this.CANCEL = 'cancel';
        this.FINISH = 'finish';
        this.CONFIRM = 'confirm';
        this.lang = DomainProvider.lang;
    }
    LandtransportationProvider.prototype.sendOrder = function (msg) {
        return this.http.post(this.url.url + 'api/transport/order', msg);
    };
    LandtransportationProvider.prototype.customerConfirm = function (msg) {
        //order_id
        //status
        return this.http.post(this.url.url + 'api/transport/order/confirm', msg);
    };
    LandtransportationProvider.prototype.customerComplaint = function (msg) {
        //member_id
        //order_id
        //message
        return this.http.post(this.url.url + 'api/transport/order/complaint', msg);
    };
    LandtransportationProvider.prototype.customerHistory = function (msg) {
        //member_id
        return this.http.post(this.url.url + 'api/transport/order/history', msg);
    };
    LandtransportationProvider.prototype.transporterHistory = function (msg) {
        //member_id
        return this.http.post(this.url.url + 'api/transport/order/history/provider', msg);
    };
    LandtransportationProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], LandtransportationProvider);
    return LandtransportationProvider;
}());
export { LandtransportationProvider };
//# sourceMappingURL=landtransportation.js.map