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
var SecuritytermsPage = /** @class */ (function () {
    function SecuritytermsPage(vip, navCtrl, navParams) {
        this.vip = vip;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SecuritytermsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.vip.getsecurityterms().subscribe(function (res) {
            console.log('   ', res);
            _this.details = res[0]['details'];
            _this.title = res[0]['title'];
        });
    };
    SecuritytermsPage = __decorate([
        Component({
            selector: 'page-securityterms',
            templateUrl: 'securityterms.html',
        }),
        __metadata("design:paramtypes", [VipProvider, NavController, NavParams])
    ], SecuritytermsPage);
    return SecuritytermsPage;
}());
export { SecuritytermsPage };
//# sourceMappingURL=securityterms.js.map