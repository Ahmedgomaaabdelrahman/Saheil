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
import { GetServicesProvider } from "../../providers/get-services/get-services";
var AboutsahielPage = /** @class */ (function () {
    function AboutsahielPage(service, navCtrl, navParams) {
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutsahielPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad AboutsahielPage');
        var self = this;
        this.service.aboutSahil().then(function (obj) {
            self.details_ar = obj[0].details_ar;
            self.details_en = obj[0].details_en;
            self.picpath = obj[0].picpath;
            console.log(obj);
            console.log(self.picpath);
        });
    };
    AboutsahielPage = __decorate([
        Component({
            selector: 'page-aboutsahiel',
            templateUrl: 'aboutsahiel.html',
        }),
        __metadata("design:paramtypes", [GetServicesProvider, NavController, NavParams])
    ], AboutsahielPage);
    return AboutsahielPage;
}());
export { AboutsahielPage };
//# sourceMappingURL=aboutsahiel.js.map