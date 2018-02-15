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
import { NavController, MenuController } from 'ionic-angular';
import { AddhorsedaysPage } from '../addhorsedays/addhorsedays';
import { DiariesProvider } from '../../providers/diaries/diaries';
import { CommonservicesProvider } from '../../providers/commonservices/commonservices';
var HorsedaysPage = /** @class */ (function () {
    function HorsedaysPage(diaries, menuCtrl, common, navCtrl) {
        this.diaries = diaries;
        this.menuCtrl = menuCtrl;
        this.common = common;
        this.navCtrl = navCtrl;
        this.menuCtrl.enable(true);
        this.common.getStoredValue('user').then(function (user) {
            console.log('user : ', user);
        });
    }
    HorsedaysPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.startTimer);
        clearInterval(this.timer);
    };
    HorsedaysPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.page = 1;
        this.menuCtrl.enable(true);
        this.items = [];
        this.show = [];
        var self = this;
        this.diaries.getAllDiaries(this.page).subscribe(function (res) {
            _this.items = res['diaries'];
            self.show = [];
            var i = 0;
            self.startTimer = setInterval(function () {
                self.show = {
                    'picpath': res['diaries'][i]['picpath'],
                    'video': res['diaries'][i]['video'],
                    'username': res['diaries'][i]['member'][0]['username'], 'created': res['diaries'][i]['created']
                };
                if (i != self.items.length - 1) {
                    i++;
                }
                else {
                    i = 0;
                }
            }, 3000);
        });
    };
    HorsedaysPage.prototype.less = function () {
        var _this = this;
        console.log(this.page);
        if (this.page >= 0) {
            clearInterval(this.timer);
            clearInterval(this.startTimer);
            this.page -= 1;
            var self_1 = this;
            // clearInterval()
            console.log(this.items[this.items.length - 1]['diary_id']);
            console.log(this.items.length - 1);
            this.diaries.getAllDiariesasc(this.page).subscribe(function (res) {
                _this.index = 0;
                _this.items = [];
                console.log('new items :', res['diaries'].length);
                _this.items = res['diaries'];
                self_1.show = [];
                var i = 0;
                self_1.startTimer = setInterval(function () {
                    self_1.show = {
                        'picpath': res['diaries'][i]['picpath'],
                        'video': res['diaries'][i]['video'],
                        'username': res['diaries'][i]['member'][0]['username'], 'created': res['diaries'][i]['created']
                    };
                    if (i != self_1.items.length - 1) {
                        i++;
                    }
                    else {
                        i = 0;
                    }
                }, 3000);
            });
        }
    };
    HorsedaysPage.prototype.more = function () {
        var _this = this;
        this.page += 1;
        console.log('num of page :', this.page);
        var self = this;
        this.diaries.getAllDiaries(this.page).subscribe(function (res) {
            if (res['diaries'].length != 0) {
                clearInterval(_this.timer);
                clearInterval(_this.startTimer);
                _this.index = 0;
                _this.items = [];
                _this.items = res['diaries'];
                self.show = [];
                var i_1 = 0;
                self.startTimer = setInterval(function () {
                    self.show = {
                        'picpath': res['diaries'][i_1]['picpath'],
                        'video': res['diaries'][i_1]['video'],
                        'username': res['diaries'][i_1]['member'][0]['username'], 'created': res['diaries'][i_1]['created']
                    };
                    if (i_1 != self.items.length - 1) {
                        i_1++;
                    }
                    else {
                        i_1 = 0;
                    }
                }, 3000);
            }
            else {
                _this.page -= 1;
                _this.common.presentToast('انتهت اليوميات');
            }
        });
    };
    HorsedaysPage.prototype.clickShow = function (item) {
        clearInterval(this.timer);
        clearInterval(this.startTimer);
        console.log(item);
        console.log(item['picpath'] != 'http://www.sahel-horse.com/uploads/');
        console.log(item['picpath']);
        console.log(item['video']);
        this.show = [];
        this.show = {
            'picpath': item['picpath'],
            'video': item['video'],
            'username': item['member'][0]['username'], 'created': item['created']
        };
    };
    HorsedaysPage.prototype.addnew = function () {
        this.navCtrl.push(AddhorsedaysPage);
    };
    HorsedaysPage = __decorate([
        Component({
            selector: 'page-horsedays',
            templateUrl: 'horsedays.html',
        }),
        __metadata("design:paramtypes", [DiariesProvider, MenuController, CommonservicesProvider, NavController])
    ], HorsedaysPage);
    return HorsedaysPage;
}());
export { HorsedaysPage };
//# sourceMappingURL=horsedays.js.map