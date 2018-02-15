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
import { SignupPage } from '../signup/signup';
import { GetServicesProvider } from "../../providers/get-services/get-services";
var ChoosecountryPage = /** @class */ (function () {
    function ChoosecountryPage(service, navCtrl, navParams) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChoosecountryPage.prototype.submit = function (country) {
        this.navCtrl.push(SignupPage, country);
    };
    ChoosecountryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.countries = [];
        this.service.countryid().then(function (res) {
            _this.countries = res;
        });
        console.log(this.countries);
    };
    ChoosecountryPage = __decorate([
        Component({
            selector: 'page-choosecountry',
            templateUrl: 'choosecountry.html',
        }),
        __metadata("design:paramtypes", [GetServicesProvider, NavController, NavParams])
    ], ChoosecountryPage);
    return ChoosecountryPage;
}());
export { ChoosecountryPage };
//# sourceMappingURL=choosecountry.js.map