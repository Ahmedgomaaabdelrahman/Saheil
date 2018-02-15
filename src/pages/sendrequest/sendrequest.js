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
import { VeterinariansProvider } from "../../providers/veterinarians/veterinarians";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
var SendrequestPage = /** @class */ (function () {
    function SendrequestPage(common, v, navCtrl, navParams) {
        var _this = this;
        this.common = common;
        this.v = v;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.flag = false;
        var self = this;
        this.common.getStoredValue('user').then(function (res) {
            if (res != null) {
                _this._member_id = res.member_id;
                _this.flag = true;
            }
            else {
                _this.flag = false;
                // this._member_id=res['member_id']
            }
        });
    }
    SendrequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendrequestPage');
    };
    SendrequestPage.prototype.send = function () {
        var _this = this;
        var msg = {
            'member_id': this._member_id,
            'member_service_id': this.navParams.data,
            'subject': this._subject,
            'message': this._message
        };
        this.v.sendOrder(msg).subscribe(function (res) {
            console.log(res);
            if (res['message_id'] != null) {
                _this.common.presentToast('تم الارسال');
            }
            else {
                _this.common.presentToast('لم يتم الارسال');
            }
        });
    };
    SendrequestPage = __decorate([
        Component({
            selector: 'page-sendrequest',
            templateUrl: 'sendrequest.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, VeterinariansProvider, NavController, NavParams])
    ], SendrequestPage);
    return SendrequestPage;
}());
export { SendrequestPage };
//# sourceMappingURL=sendrequest.js.map