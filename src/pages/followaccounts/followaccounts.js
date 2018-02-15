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
import { VipProvider } from "../../providers/vip/vip";
var FollowaccountsPage = /** @class */ (function () {
    function FollowaccountsPage(vip, navCtrl, navParams) {
        this.vip = vip;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FollowaccountsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.followups = [];
        this.vip.getAllfollowup().subscribe(function (res) {
            console.log(res);
            _this.followups = res;
        });
        console.log('ionViewDidLoad FollowaccountsPage');
    };
    FollowaccountsPage = __decorate([
        Component({
            selector: 'page-followaccounts',
            templateUrl: 'followaccounts.html',
        }),
        __metadata("design:paramtypes", [VipProvider, NavController, NavParams])
    ], FollowaccountsPage);
    return FollowaccountsPage;
}());
export { FollowaccountsPage };
//# sourceMappingURL=followaccounts.js.map