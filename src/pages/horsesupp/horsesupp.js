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
var HorsesuppPage = /** @class */ (function () {
    function HorsesuppPage(common, sups, navCtrl, navParams) {
        this.common = common;
        this.sups = sups;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HorsesuppPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.supArray = [];
        this.sups.getAllSupplies(this.navParams.data).subscribe(function (res) {
            console.log(res);
            _this.supArray = res[0].supplies;
        });
        this.common.getStoredValue('user').then(function (user) {
            _this.member_id = user.member_id;
        });
    };
    HorsesuppPage.prototype.addToFav = function (itemToBeAdded) {
        var _this = this;
        var fav = {
            "member_id": this.member_id, "supply_id": itemToBeAdded
        };
        this.sups.addToUserFav(fav).subscribe(function (res) {
            console.log(res);
            _this.common.presentToast('تمت الاضافة الي قائمة المفضلة');
        });
    };
    // getDetails(id){
    //     this.sups.getSupplyDetail(id)
    // }
    HorsesuppPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HorsesuppPage');
    };
    HorsesuppPage.prototype.addToBasket = function (sup) {
        var _this = this;
        this.supArrayy = [];
        var self = this;
        console.log('add to cart :', sup);
        this.sups.addToCart(this.member_id, sup['supply_id']).subscribe(function (res) {
            console.log('add to cart :', res);
            if (res['error'] != null) { }
            else {
                _this.common.presentToast('تمت الاضافة الي السلة');
            }
        });
        // this.common.getStoredValue('cart').then(cart=>{
        //     if(cart !=null){
        //     for(let i=0;i<cart.length;i++){
        //         self.supArrayy.push(cart[i])
        //
        //
        //     }
        //         self.supArrayy.push(sup)
        //         self.common.storeValue('cart',self.supArrayy);
        //     }else{
        //         self.supArrayy.push(sup)
        //         self.common.storeValue('cart',self.supArrayy);            }
        //
        // })
    };
    HorsesuppPage = __decorate([
        Component({
            selector: 'page-horsesupp',
            templateUrl: 'horsesupp.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, SupsProvider, NavController, NavParams])
    ], HorsesuppPage);
    return HorsesuppPage;
}());
export { HorsesuppPage };
//# sourceMappingURL=horsesupp.js.map