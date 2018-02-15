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
import { EditproductPage } from '../editproduct/editproduct';
import { SupsProvider } from "../../providers/sups/sups";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { AddproductPage } from "../addproduct/addproduct";
var SellerproductsPage = /** @class */ (function () {
    function SellerproductsPage(common, sups, navCtrl, navParams) {
        this.common = common;
        this.sups = sups;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellerproductsPage.prototype.ionViewWillEnter = function () {
        this.mySups = [];
        var self = this;
        this.common.getStoredValue('user').then(function (user) {
            console.log(user.member_id);
            self.member_id = user.member_id;
            self.sups.getMySuplies(user.member_id).subscribe(function (res) {
                console.log(res);
                self.mySups = res;
            });
        });
        console.log('ionViewDidLoad FavoritePage');
    };
    SellerproductsPage.prototype.addNew = function () {
        this.navCtrl.push(AddproductPage);
    };
    SellerproductsPage.prototype.deleteASup = function (itemId, index) {
        var _this = this;
        var req = {
            "member_id": this.member_id,
            "supply_id": itemId
        };
        this.sups.deleteSup(req).subscribe(function (res) {
            _this.mySups.splice(index, 1);
        });
    };
    SellerproductsPage.prototype.edit = function (itemId) {
        console.log(itemId);
        this.navCtrl.push(EditproductPage, itemId);
    };
    SellerproductsPage = __decorate([
        Component({
            selector: 'page-sellerproducts',
            templateUrl: 'sellerproducts.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, SupsProvider, NavController, NavParams])
    ], SellerproductsPage);
    return SellerproductsPage;
}());
export { SellerproductsPage };
//# sourceMappingURL=sellerproducts.js.map