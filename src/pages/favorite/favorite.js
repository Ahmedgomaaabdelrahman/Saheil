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
import { SupsProvider } from "../../providers/sups/sups";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { DealersProvider } from "../../providers/dealers/dealers";
import { HorsedetailsPage } from "../horsedetails/horsedetails";
var FavoritePage = /** @class */ (function () {
    function FavoritePage(dealer, common, sups, navCtrl, navParams) {
        this.dealer = dealer;
        this.common = common;
        this.sups = sups;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritePage.prototype.startViewingSupsFavs = function () {
        this.favs = [];
        var self = this;
        this.common.getStoredValue('user').then(function (user) {
            console.log(user.member_id);
            self.member_id = user.member_id;
            self.sups.getUserFav(user.member_id).subscribe(function (res) {
                console.log(res);
                self.favs = res;
            });
        });
    };
    FavoritePage.prototype.startViewingHorsesFavs = function () {
        this.favs = [];
        var self = this;
        this.common.getStoredValue('user').then(function (user) {
            console.log(user.member_id);
            self.member_id = user.member_id;
            self.dealer.getHorsesfavorite(user.member_id).subscribe(function (res) {
                console.log(res);
                self.favs = res;
            });
        });
    };
    FavoritePage.prototype.ionViewWillEnter = function () {
        this.mode = this.navParams.data;
        if (this.mode == 1) {
            this.startViewingHorsesFavs();
        }
        else {
            this.startViewingSupsFavs();
        }
        console.log('ionViewDidLoad FavoritePage');
    };
    FavoritePage.prototype.gotodetails = function (id) {
        this.navCtrl.push(HorsedetailsPage, id);
    };
    FavoritePage.prototype.deleteToUserFav = function (itemToBeDeleted, index) {
        var _this = this;
        var fav = {
            "member_id": this.member_id,
            "supply_favorite_id": itemToBeDeleted
        };
        this.sups.deleteToUserFav(fav).subscribe(function (res) {
            console.log(fav);
            console.log(res);
            if (res['error'] == null) {
                _this.favs.splice(index, 1);
                _this.common.presentToast('تمت الحذف من قائمة المفضلة');
            }
        });
    };
    FavoritePage.prototype.deleteHorseUserFav = function (itemToBeDeleted, index) {
        var _this = this;
        this.dealer.favoritedelete(this.member_id, itemToBeDeleted).subscribe(function (res) {
            // console.log(fav)
            console.log(res);
            if (res['error'] == null) {
                _this.favs.splice(index, 1);
                _this.common.presentToast('تمت الحذف من قائمة المفضلة');
            }
        });
    };
    FavoritePage = __decorate([
        Component({
            selector: 'page-favorite',
            templateUrl: 'favorite.html',
        }),
        __metadata("design:paramtypes", [DealersProvider, CommonservicesProvider, SupsProvider, NavController, NavParams])
    ], FavoritePage);
    return FavoritePage;
}());
export { FavoritePage };
//# sourceMappingURL=favorite.js.map