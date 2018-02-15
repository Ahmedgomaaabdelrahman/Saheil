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
import { HorsesPage } from '../horses/horses';
import { VeterinariansProvider } from "../../providers/veterinarians/veterinarians";
var HorsesellerPage = /** @class */ (function () {
    function HorsesellerPage(veterinations, navCtrl, navParams) {
        this.veterinations = veterinations;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HorsesellerPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.veterinariansArray = [];
        this.veterinations.getAllServices(6).subscribe(function (veterinarians) {
            _this.veterinariansArray = veterinarians;
            console.log(_this.veterinariansArray);
        });
    };
    HorsesellerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllclinksPage');
    };
    HorsesellerPage.prototype.gotodetails = function (id) {
        this.navCtrl.push(HorsesPage, id);
    };
    HorsesellerPage = __decorate([
        Component({
            selector: 'page-horseseller',
            templateUrl: 'horseseller.html',
        }),
        __metadata("design:paramtypes", [VeterinariansProvider, NavController, NavParams])
    ], HorsesellerPage);
    return HorsesellerPage;
}());
export { HorsesellerPage };
//# sourceMappingURL=horseseller.js.map