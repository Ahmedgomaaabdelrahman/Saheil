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
import { OnetourPage } from './../onetour/onetour';
import { ChampionsNewsProvider } from "../../providers/champions-news/champions-news";
var TourtablesPage = /** @class */ (function () {
    function TourtablesPage(champs, navCtrl, navParams) {
        this.champs = champs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TourtablesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.tours = [];
        this.champs.getAllTournaments().subscribe(function (res) {
            _this.tours = res;
        });
        console.log('ionViewDidLoad TourtablesPage');
    };
    TourtablesPage.prototype.goone = function () {
        this.navCtrl.push(OnetourPage);
    };
    TourtablesPage = __decorate([
        Component({
            selector: 'page-tourtables',
            templateUrl: 'tourtables.html',
        }),
        __metadata("design:paramtypes", [ChampionsNewsProvider, NavController, NavParams])
    ], TourtablesPage);
    return TourtablesPage;
}());
export { TourtablesPage };
//# sourceMappingURL=tourtables.js.map