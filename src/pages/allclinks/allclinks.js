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
import { ClinkdetailsPage } from "../clinkdetails/clinkdetails";
var AllclinksPage = /** @class */ (function () {
    function AllclinksPage(veterinations, navCtrl, navParams) {
        this.veterinations = veterinations;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllclinksPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.veterinariansArray = [];
        this.veterinations.getAllServices(2).subscribe(function (veterinarians) {
            _this.veterinariansArray = veterinarians;
            console.log(_this.veterinariansArray);
        });
    };
    AllclinksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllclinksPage');
    };
    AllclinksPage.prototype.gotodetails = function (id) {
        this.navCtrl.push(ClinkdetailsPage, id);
    };
    AllclinksPage = __decorate([
        Component({
            selector: 'page-allclinks',
            templateUrl: 'allclinks.html',
        }),
        __metadata("design:paramtypes", [VeterinariansProvider, NavController, NavParams])
    ], AllclinksPage);
    return AllclinksPage;
}());
export { AllclinksPage };
//# sourceMappingURL=allclinks.js.map