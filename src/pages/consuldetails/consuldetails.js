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
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { MailProvider } from "../../providers/mail/mail";
var ConsuldetailsPage = /** @class */ (function () {
    function ConsuldetailsPage(common, navCtrl, navParams, mail) {
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mail = mail;
    }
    ConsuldetailsPage.prototype.ionViewWillEnter = function () {
        this.msg = [];
        console.log(this.navParams.data);
        var self = this;
        self.common.getStoredValue('user').then(function (user) {
            console.log(user.member_id);
            self.mail.getMsgDetails(self.navParams.data, user.member_id).subscribe(function (res) {
                console.log(res[0]);
                self.message = res[0].message;
                self.subject = res[0].subject;
            });
        });
    };
    ConsuldetailsPage.prototype.ionViewDidLoad = function () {
        // this.mail.
        console.log('ionViewDidLoad ConsuldetailsPage');
    };
    ConsuldetailsPage = __decorate([
        Component({
            selector: 'page-consuldetails',
            templateUrl: 'consuldetails.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, NavController, NavParams, MailProvider])
    ], ConsuldetailsPage);
    return ConsuldetailsPage;
}());
export { ConsuldetailsPage };
//# sourceMappingURL=consuldetails.js.map