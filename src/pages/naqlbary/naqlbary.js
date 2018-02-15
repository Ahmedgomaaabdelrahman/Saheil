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
import { NaqldetailsPage } from './../naqldetails/naqldetails';
import { VeterinariansProvider } from "../../providers/veterinarians/veterinarians";
var NaqlbaryPage = /** @class */ (function () {
    function NaqlbaryPage(veterinations, navCtrl, navParams) {
        this.veterinations = veterinations;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NaqlbaryPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.veterinariansArray = [];
        this.veterinations.getAllServices(4).subscribe(function (veterinarians) {
            _this.veterinariansArray = veterinarians;
            console.log(_this.veterinariansArray);
        });
    };
    NaqlbaryPage.prototype.gotodetails = function (id) {
        this.navCtrl.push(NaqldetailsPage, id);
    };
    NaqlbaryPage = __decorate([
        Component({
            selector: 'page-naqlbary',
            templateUrl: 'naqlbary.html',
        }),
        __metadata("design:paramtypes", [VeterinariansProvider, NavController, NavParams])
    ], NaqlbaryPage);
    return NaqlbaryPage;
}());
export { NaqlbaryPage };
//# sourceMappingURL=naqlbary.js.map