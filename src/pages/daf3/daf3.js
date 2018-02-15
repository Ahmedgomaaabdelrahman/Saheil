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
import { PaypalProvider } from "../../providers/paypal/paypal";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
var Daf3Page = /** @class */ (function () {
    function Daf3Page(common, pay, navCtrl, navParams) {
        this.common = common;
        this.pay = pay;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Daf3Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.common.getStoredValue('user').then(function (user) {
            if (user != null) {
                _this.member_id = user.member_id;
                _this.flag = true;
            }
            else {
                _this.flag = false;
            }
        });
        // console.log('ionViewDidLoad Daf3Page');
    };
    Daf3Page.prototype.submit = function () {
        var _this = this;
        if (this.member_id != null) {
            this.pay.getKeys().subscribe(function (res) {
                console.log(res['PRODUCTION_CLIENT_ID']);
                _this.pay.pay(_this.member_id, _this.amount, 'تمت العملية بنجاح', 'فشلت العملية', res['PRODUCTION_CLIENT_ID'], res['SANDBOX_CLIENT_ID']);
            });
        }
    };
    Daf3Page = __decorate([
        Component({
            selector: 'page-daf3',
            templateUrl: 'daf3.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, PaypalProvider, NavController, NavParams])
    ], Daf3Page);
    return Daf3Page;
}());
export { Daf3Page };
//# sourceMappingURL=daf3.js.map