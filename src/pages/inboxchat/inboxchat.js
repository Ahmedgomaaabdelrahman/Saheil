var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from './../chat/chat';
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { ChatProvider } from "../../providers/chat/chat";
var InboxchatPage = /** @class */ (function () {
    function InboxchatPage(common, chat, navCtrl, navParams) {
        var _this = this;
        this.common = common;
        this.chat = chat;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common.getStoredValue('user').then(function (user) {
            _this.member_id = user['member_id'];
        });
    }
    InboxchatPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad InboxchatPage');
        this.friends = [];
        this.chat.getMyConversations(this.member_id).subscribe(function (res) {
            _this.friends = res;
        });
    };
    InboxchatPage.prototype.gochat = function (id) {
        this.navCtrl.push(ChatPage, { 'mode': 1, 'id': id });
    };
    InboxchatPage = __decorate([
        Component({
            selector: 'page-inboxchat',
            templateUrl: 'inboxchat.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, ChatProvider, NavController, NavParams])
    ], InboxchatPage);
    return InboxchatPage;
}());
export { InboxchatPage };
//# sourceMappingURL=inboxchat.js.map