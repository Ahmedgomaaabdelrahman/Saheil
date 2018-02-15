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
  Generated class for the MailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MailProvider = /** @class */ (function () {
    function MailProvider(url, http) {
        this.url = url;
        this.http = http;
        console.log('Hello VeterinariansProvider Provider');
        this.lang = DomainProvider.lang;
    }
    MailProvider.prototype.getMyInbox = function (id) {
        var mail = {
            'member_id': id
        };
        return this.http.post(this.url.url + 'api/messages/sent/', mail);
    };
    MailProvider.prototype.getMyaInbox = function (id) {
        var mail = {
            'member_id': id
        };
        return this.http.post(this.url.url + 'api/messages/inbox/', mail);
    };
    MailProvider.prototype.getMsgDetails = function (msg, member_id) {
        var mail = {
            'member_id': member_id,
            'message_id': msg.message_id
        };
        return this.http.post(this.url.url + '/api/view/message/', mail);
    };
    MailProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], MailProvider);
    return MailProvider;
}());
export { MailProvider };
//# sourceMappingURL=mail.js.map