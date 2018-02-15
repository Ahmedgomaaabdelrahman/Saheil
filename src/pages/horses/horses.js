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
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { DealersProvider } from "../../providers/dealers/dealers";
import { HorsedetailsPage } from "../horsedetails/horsedetails";
var HorsesPage = /** @class */ (function () {
    function HorsesPage(common, dealer, navCtrl, navParams) {
        this.common = common;
        this.dealer = dealer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HorsesPage.prototype.more = function (horse) {
        console.log(horse);
        this.navCtrl.push(HorsedetailsPage, horse.horse_id);
    };
    HorsesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.hourses = [];
        this.dealer.getDealerHoursesDetails(this.navParams.data).subscribe(function (res) {
            console.log(res);
            _this.hourses = res[0].horses;
            console.log(_this.hourses);
        });
        this.common.getStoredValue('user').then(function (user) {
            _this.member_id = user.member_id;
        });
    };
    HorsesPage.prototype.addToFav = function (itemToBeAdded) {
        // let fav = {
        //     "member_id": this.member_id, "supply_id": itemToBeAdded
        // }
        //
        // this.dealer.addToUserFav(fav).subscribe(res => {
        //     console.log(res)
        //     this.common.presentToast('تمت الاضافة الي قائمة المفضلة')
        // })
    };
    // getDetails(id){
    //     this.sups.getSupplyDetail(id)
    // }
    HorsesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorsesuppPage');
    };
    HorsesPage.prototype.addFav = function (fid) {
        var _this = this;
        var fav = {
            'member_id': this.member_id,
            'horse_id': fid
        };
        this.dealer.addToUserFav(fav).subscribe(function (res) {
            console.log(res);
            if (!res['error']) {
                _this.common.presentToast('تمت الاضافة الي المفضلة');
            }
            else {
                _this.common.presentToast('عفوا لم تنجح العملية');
            }
        });
    };
    HorsesPage = __decorate([
        Component({
            selector: 'page-horses',
            templateUrl: 'horses.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, DealersProvider, NavController, NavParams])
    ], HorsesPage);
    return HorsesPage;
}());
export { HorsesPage };
//# sourceMappingURL=horses.js.map