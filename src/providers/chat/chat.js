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
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = /** @class */ (function () {
    function ChatProvider(url, http) {
        this.url = url;
        this.http = http;
        this.lang = DomainProvider.lang;
    }
    ChatProvider.prototype.getPublicChat = function (index) {
        return this.http.get(this.url.url + 'api/chat/page/' + index);
    };
    ChatProvider.prototype.sendPublicChat = function (sender_id, receiver_id, msg, attachments) {
        var message = {
            'sender': sender_id,
            'receiver': receiver_id,
            'message': msg,
            'attachments': attachments
        };
        return this.http.post(this.url.url + 'api/chat/send', message);
    };
    ChatProvider.prototype.sendPrivateChat = function (sender_id, receiver_id, msg, attachments) {
        var message = {
            'sender': sender_id,
            'receiver': receiver_id,
            'message': msg,
            'attachments': attachments
        };
        return this.http.post(this.url.url + 'api/chat/send/private', message);
    };
    ChatProvider.prototype.getMyConversations = function (member_id) {
        var message = {
            'member_id': member_id
        };
        return this.http.post(this.url.url + 'api/chat/friends', message);
    };
    ChatProvider.prototype.getMyPraivateConversations = function (sender, receiver, index) {
        var message = {
            'sender': sender,
            'receiver': receiver
        };
        return this.http.post(this.url.url + 'api/chat/private/page/' + index, message);
    };
    ChatProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [DomainProvider, HttpClient])
    ], ChatProvider);
    return ChatProvider;
}());
export { ChatProvider };
//# sourceMappingURL=chat.js.map