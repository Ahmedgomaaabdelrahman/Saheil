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
import { FavoritePage } from '../favorite/favorite';
var FavtypePage = /** @class */ (function () {
    function FavtypePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavtypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavtypePage');
    };
    FavtypePage.prototype.gofav = function () {
        this.navCtrl.push(FavoritePage, 0);
    };
    FavtypePage.prototype.goHorsefav = function () {
        this.navCtrl.push(FavoritePage, 1);
    };
    FavtypePage = __decorate([
        Component({
            selector: 'page-favtype',
            templateUrl: 'favtype.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FavtypePage);
    return FavtypePage;
}());
export { FavtypePage };
//# sourceMappingURL=favtype.js.map