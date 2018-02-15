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
import { LivestreamPage } from '../livestream/livestream';
import { TourtablesPage } from '../tourtables/tourtables';
var TournewsPage = /** @class */ (function () {
    function TournewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TournewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TournewsPage');
    };
    TournewsPage.prototype.golive = function () {
        this.navCtrl.push(LivestreamPage);
    };
    TournewsPage.prototype.goOne = function () {
        this.navCtrl.push(TourtablesPage);
    };
    TournewsPage = __decorate([
        Component({
            selector: 'page-tournews',
            templateUrl: 'tournews.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TournewsPage);
    return TournewsPage;
}());
export { TournewsPage };
//# sourceMappingURL=tournews.js.map