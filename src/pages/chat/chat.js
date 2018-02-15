var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatProvider } from "../../providers/chat/chat";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { Content } from 'ionic-angular';
import { ImagechatPage } from "../imagechat/imagechat";
var ChatPage = /** @class */ (function () {
    function ChatPage(common, chat, navCtrl, navParams) {
        this.common = common;
        this.chat = chat;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mode = this.navParams.data;
        this.index = 1;
        if (this.navParams.data['mode'] != 0) {
            console.log(this.navParams.data);
            this.reciver = this.navParams.data['id'];
        }
        // this.scrollDown()
    }
    ChatPage_1 = ChatPage;
    ChatPage.prototype.ngOnChanges = function () {
        this.scrollDown();
    };
    ChatPage.prototype.scrollDown = function () {
        var self = this;
        setTimeout(function () {
            self.content.scrollToBottom();
        }, 1000);
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.common.getStoredValue('user').then(function (res) {
            _this.member_id = res.member_id;
            console.log(_this.member_id);
            _this.getAllMessages(0);
        });
    };
    ChatPage.prototype.getAllMessages = function (i) {
        var _this = this;
        if (this.navParams.data['mode'] == 0) {
            this.msgs = [];
            console.log('ionViewDidLoad ChatPage');
            if (i == null) {
                this.chat.getPublicChat(this.index).subscribe(function (res) {
                    if (res != null) {
                        _this.index += 1;
                        for (var l = 0; l < 10; l++) {
                            if (res[l] != null) {
                                _this.msgs.push(res[l]);
                            }
                        }
                        // this.scrollDown()
                    }
                });
            }
            else {
                this.chat.getPublicChat(i).subscribe(function (res) {
                    _this.msgs = [];
                    for (var l = 0; l < 10; l++) {
                        if (res[l] != null) {
                            _this.msgs.push(res[l]);
                        }
                    }
                    _this.scrollDown();
                });
            }
        }
        else {
            if (i == null) {
                this.chat.getMyPraivateConversations(this.member_id, this.navParams.data['id'], this.index).subscribe(function (res) {
                    if (res != null) {
                        _this.index += 1;
                        for (var l = 0; l < 10; l++) {
                            if (res[l] != null) {
                                _this.msgs.push(res[l]);
                            }
                        }
                    }
                    _this.scrollDown();
                });
            }
            else {
                this.chat.getMyPraivateConversations(this.member_id, this.navParams.data['id'], i).subscribe(function (res) {
                    _this.msgs = [];
                    for (var l = 0; l < 10; l++) {
                        if (res[l] != null) {
                            _this.msgs.push(res[l]);
                        }
                    }
                    _this.scrollDown();
                });
            }
        }
    };
    ChatPage.prototype.sendImage = function () {
        var _this = this;
        this.common.presentActionSheet('cam', ' galery').then(function (res) {
            console.log(res);
            _this.serviceCam(res);
            _this.scrollDown();
        });
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        this.sendmessageBody = this.messageBody;
        this.messageBody = '';
        if (this.navParams.data['mode'] == 0) {
            this.chat.sendPublicChat(this.member_id, null, this.sendmessageBody, 'no').subscribe(function (res) {
                console.log(res);
                _this.getAllMessages(1);
                _this.index = 1;
            });
        }
        else {
            console.log(this.member_id, this.navParams.data['id'], this.messageBody);
            this.chat.sendPrivateChat(this.member_id, this.navParams.data['id'], this.sendmessageBody, null).subscribe(function (res) {
                console.log(res);
                _this.getAllMessages(1);
                _this.index = 1;
            });
        }
    };
    ChatPage.prototype.serviceCam = function (source) {
        var _this = this;
        this.common.camPic(source).then(function (res) {
            // console.log('img',res)
            // this.service_image=res;
            _this.service_image = 'data:image/jpeg;base64,' + res;
            _this.service_sendimage = res;
            _this.common.presentLoadingDefault();
            if (_this.navParams.data['mode'] == 0) {
                _this.chat.sendPublicChat(_this.member_id, null, null, _this.service_sendimage).subscribe(function (res) {
                    console.log(res);
                    _this.getAllMessages(1);
                    _this.index = 1;
                    _this.common.loadDismess();
                });
            }
            else {
                _this.chat.sendPrivateChat(_this.member_id, _this.navParams.data['id'], null, _this.service_sendimage).subscribe(function (res) {
                    _this.getAllMessages(1);
                    _this.index = 1;
                    _this.common.loadDismess();
                });
            }
        }).catch(function (e) {
            console.log('cam error :', e);
        });
    };
    ChatPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        if (this.navParams.data['mode'] == 0) {
            this.chat.getPublicChat(1).subscribe(function (res) {
                _this.msgs = [];
                for (var i = 0; i < 10; i++) {
                    if (res[i] != null) {
                        _this.msgs.push(res[i]);
                    }
                }
                _this.index = 1;
            });
        }
        else {
            this.chat.getMyPraivateConversations(this.member_id, this.navParams.data['id'], this.index).subscribe(function (res) {
                _this.msgs = [];
                for (var i = 0; i < 10; i++) {
                    if (res[i] != null) {
                        _this.msgs.push(res[i]);
                    }
                }
                _this.index = 1;
            });
        }
        // this.diaries.getAllDiaries(this.items.length-1).subscribe(res=> {
        //     console.log(res['diaries'])
        //     this.items=res['diaries']
        // })
        console.log('Async operation has ended');
        infiniteScroll.complete();
    };
    ChatPage.prototype.more = function () {
        this.getAllMessages();
    };
    ChatPage.prototype.goPrivate = function (id) {
        console.log(id);
        this.navCtrl.push(ChatPage_1, { 'mode': 1, 'id': id });
    };
    ChatPage.prototype.maxmizeImage = function (img) {
        this.navCtrl.push(ImagechatPage, img);
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = ChatPage_1 = __decorate([
        Component({
            selector: 'page-chat',
            templateUrl: 'chat.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, ChatProvider, NavController, NavParams])
    ], ChatPage);
    return ChatPage;
    var ChatPage_1;
}());
export { ChatPage };
//# sourceMappingURL=chat.js.map