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
import { OnetourdetailsPage } from './../onetourdetails/onetourdetails';
import { ChampionsNewsProvider } from "../../providers/champions-news/champions-news";
var OnetourPage = /** @class */ (function () {
    function OnetourPage(champs, navCtrl, navParams) {
        this.champs = champs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnetourPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.tours = [];
        this.champs.getAllTournaments().subscribe(function (res) {
            console.log('ee', res);
            _this.tours = res;
        });
        console.log('ionViewDidLoad TourtablesPage');
    };
    OnetourPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnetourPage');
    };
    OnetourPage.prototype.gotodetails = function (id) {
        this.navCtrl.push(OnetourdetailsPage, id);
    };
    OnetourPage = __decorate([
        Component({
            selector: 'page-onetour',
            templateUrl: 'onetour.html',
        }),
        __metadata("design:paramtypes", [ChampionsNewsProvider, NavController, NavParams])
    ], OnetourPage);
    return OnetourPage;
}());
export { OnetourPage };
//# sourceMappingURL=onetour.js.map