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
import { PaypalProvider } from "../paypal/paypal";
/*
  Generated class for the SupsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SupsProvider = /** @class */ (function () {
    function SupsProvider(url, http, paypal) {
        this.url = url;
        this.http = http;
        this.paypal = paypal;
        console.log('Hello VeterinariansProvider Provider');
        this.lang = DomainProvider.lang;
    }
    SupsProvider.prototype.getAllSupplies = function (id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/members/services/details/' + id);
    };
    SupsProvider.prototype.getSupplyDetail = function (id) {
        return this.http.get(this.url.url + '/api/' + this.lang + '/supply/' + id);
    };
    SupsProvider.prototype.deleteSup = function (req) {
        return this.http.post(this.url.url + "/api/supplies/delete", req);
    };
    SupsProvider.prototype.addSup = function (item) {
        return this.http.post(this.url.url + 'api/supplies/add/', item);
    };
    SupsProvider.prototype.editSup = function (item) {
        return this.http.post(this.url.url + 'api/supplies/edit', item);
    };
    SupsProvider.prototype.getSupsCategoties = function () {
        return this.http.get(this.url.url + 'api/' + this.lang + '/supplies/category');
    };
    SupsProvider.prototype.getUserFav = function (memberId) {
        var fav = {
            "member_id": memberId
        };
        return this.http.post(this.url.url + "api/supplies/favorite", fav);
    };
    SupsProvider.prototype.addToUserFav = function (req) {
        return this.http.post(this.url.url + "api/supplies/favorite/add", req);
    };
    SupsProvider.prototype.deleteToUserFav = function (req) {
        // http://www.sahel-horse.com/api/supplies/favorite/delete
        return this.http.post(this.url.url + "api/supplies/favorite/delete", req);
    };
    SupsProvider.prototype.getMySuplies = function (req) {
        var my = {
            "member_id": req
        };
        // http://www.sahel-horse.com/api/supplies/manage
        return this.http.post(this.url.url + "api/supplies/manage", my);
    };
    SupsProvider.prototype.addToCart = function (member_id, supply_id) {
        //ضافة الي السرفر
        // http://www.sahel-horse.com/api/supplies/cart/add
        var my = {
            "member_id": member_id,
            "supply_id": supply_id,
            "quantity": 0
        };
        return this.http.post(this.url.url + "api/supplies/cart/add", my);
    };
    SupsProvider.prototype.deleteFromCart = function (order_id) {
        //المسح مالسرفر قبل الشراء
        //http://www.sahel-horse.com/api/supplies/cart/delete
        var my = {
            "order_id": order_id
        };
        return this.http.post(this.url.url + "api/supplies/cart/delete", my);
    };
    SupsProvider.prototype.getMyCart = function (member_id) {
        //عرض ماتمت اضافته الي السلة
        //http://www.sahel-horse.com/api/ar/supplies/mycart
        var my = {
            "member_id": member_id
        };
        return this.http.post(this.url.url + "api/" + this.lang + "/supplies/mycart", my);
    };
    SupsProvider.prototype.quantityEdit = function (order_id, quantity) {
        //عرض ماتمت اضافته الي السلة
        //http://www.sahel-horse.com/api/supplies/cart/edit
        var my = {
            "order_id": order_id,
            "quantity": quantity
        };
        return this.http.post(this.url.url + "api/supplies/cart/edit", my);
    };
    SupsProvider.prototype.buyslected = function (member_id, adress, mobile, items, price) {
        //عملية الشراء بعد التحكم فالكميات
        //http://www.sahel-horse.com/api/supplies/cart
        //http://www.sahel-horse.com/api/supplies/cart/checkout
        var my = {
            "member_id": member_id,
            "shipping": adress,
            "mobile": mobile,
        };
        console.log(my);
        // return this.http.post(this.url.url+"api/supplies/cart",my)
        // this.paypal.pay(price)
        return this.http.post(this.url.url + "api/supplies/cart/checkout", my);
    };
    SupsProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient, PaypalProvider])
    ], SupsProvider);
    return SupsProvider;
}());
export { SupsProvider };
//# sourceMappingURL=sups.js.map