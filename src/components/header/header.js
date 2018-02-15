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
import { MenuController, NavController } from 'ionic-angular';
import { CartshoppingPage } from '../../pages/cartshopping/cartshopping';
import { FavoritePage } from '../../pages/favorite/favorite';
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        console.log('Hello HeaderComponent Component');
        this.text = 'Hello World';
    }
    HeaderComponent.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    HeaderComponent.prototype.cartshop = function () {
        this.navCtrl.push(CartshoppingPage);
    };
    HeaderComponent.prototype.fav = function () {
        this.navCtrl.push(FavoritePage);
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'header',
            templateUrl: 'header.html'
        }),
        __metadata("design:paramtypes", [NavController, MenuController])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.js.map