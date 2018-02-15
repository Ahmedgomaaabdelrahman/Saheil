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
import { SupsProvider } from "../../providers/sups/sups";
var CartshoppingPage = /** @class */ (function () {
    function CartshoppingPage(cart, comman, navCtrl, navParams, common) {
        this.cart = cart;
        this.comman = comman;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common = common;
    }
    CartshoppingPage.prototype.add = function (i) {
        this.quantity[i] += 1;
        this.totalPrice += parseInt(this.sups[i].price);
        console.log(this.quantity[i]);
    };
    CartshoppingPage.prototype.remove = function (i) {
        if (this.quantity[i] > 0) {
            this.quantity[i] -= 1;
            this.totalPrice -= parseInt(this.sups[i].price);
        }
        console.log(this.quantity[i]);
    };
    CartshoppingPage.prototype.ionViewWillEnter = function () {
        this.sups = [];
        this.quantity = [];
        this.totalPrice = 0;
        var self = this;
        this.common.getStoredValue('user').then(function (user) {
            self.member_id = user['member_id'];
            self.cart.getMyCart(self.member_id).subscribe(function (res) {
                self.sups = res;
                for (var i = 0; i < self.sups.length; i++) {
                    self.quantity.push(0);
                    // self.totalPrice+=parseInt(res[i].price)
                }
                console.log(self.quantity);
            });
        });
    };
    CartshoppingPage.prototype.delete = function (i, sup) {
        console.log(sup);
        this.cart.deleteFromCart(sup.order_id).subscribe(function (res) { }, function (e) {
            console.log(e);
        });
        // if()
        this.totalPrice = this.totalPrice - (this.quantity[i] * parseInt(this.sups[i].price));
        console.log(this.quantity[i] * parseInt(this.sups[i].price));
        console.log(this.quantity[i] * parseInt(this.sups[i].price));
        this.sups.splice(i, 1);
        // this.comman.storeValue("cart",this.sups)
    };
    CartshoppingPage.prototype.prepareToBuy = function () {
        var _this = this;
        var self = this;
        var promise = new Promise(function (resolve, reject) {
            for (var i = 0; i < _this.quantity.length; i++) {
                var item = {
                    "supply_id": _this.sups[i]['supply_id'],
                    "quantity": _this.quantity[i]
                };
                self.cart.quantityEdit(_this.sups[i]['order_id'], _this.quantity[i]).subscribe(function (res) {
                    console.log('res', res);
                });
                _this.items.push(item);
            }
            // self.items=[]
            // let l=0
            //         self.sups.forEach(function (s) {
            // console.log(s.index)
            // s['quantity']=self.quantity[l]
            // l++
            // })
            resolve(self.items);
        });
        return promise;
    };
    CartshoppingPage.prototype.buy = function () {
        var _this = this;
        this.items = [];
        this.prepareToBuy().then(function (starttoBuy) {
            console.log(starttoBuy);
            console.log(_this.quantity);
            console.log(_this.totalPrice);
            // this.adress='ss'
            // this.mobile='11'
            _this.cart.buyslected(_this.member_id, _this.adress, _this.mobile, starttoBuy, _this.totalPrice).subscribe(function (res) {
                console.log(res);
                if (res['error'] != null) {
                    _this.comman.presentToast(res['error']);
                }
            });
        });
    };
    CartshoppingPage = __decorate([
        Component({
            selector: 'page-cartshopping',
            templateUrl: 'cartshopping.html',
        }),
        __metadata("design:paramtypes", [SupsProvider, CommonservicesProvider, NavController, NavParams, CommonservicesProvider])
    ], CartshoppingPage);
    return CartshoppingPage;
}());
export { CartshoppingPage };
//# sourceMappingURL=cartshopping.js.map