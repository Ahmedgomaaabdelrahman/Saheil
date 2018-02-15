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
import { ConsuldetailsPage } from '../consuldetails/consuldetails';
import { MailProvider } from "../../providers/mail/mail";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
var ConsultationPage = /** @class */ (function () {
    function ConsultationPage(common, mail, navCtrl, navParams) {
        this.common = common;
        this.mail = mail;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConsultationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.msgs = [];
        this.common.getStoredValue('user').then(function (res) {
            if (_this.navParams.data === 'in') {
                _this.mail.getMyaInbox(res.member_id).subscribe(function (res) {
                    console.log(res);
                    _this.msgs = res;
                });
            }
            else if (_this.navParams.data === 'out') {
                _this.mail.getMyInbox(res.member_id).subscribe(function (res) {
                    console.log(res);
                    _this.msgs = res;
                });
            }
        });
    };
    ConsultationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConsultationسPage');
    };
    ConsultationPage.prototype.gotodetails = function (msg) {
        this.navCtrl.push(ConsuldetailsPage, msg);
    };
    ConsultationPage = __decorate([
        Component({
            selector: 'page-consultation',
            templateUrl: 'consultation.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, MailProvider, NavController, NavParams])
    ], ConsultationPage);
    return ConsultationPage;
}());
export { ConsultationPage };
//# sourceMappingURL=consultation.js.map