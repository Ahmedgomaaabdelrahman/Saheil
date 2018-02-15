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
import { SellerproductsPage } from "../sellerproducts/sellerproducts";
var AddproductPage = /** @class */ (function () {
    function AddproductPage(common, sups, navCtrl, navParams) {
        this.common = common;
        this.sups = sups;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddproductPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.allCategories = [];
        this.sups.getSupsCategoties().subscribe(function (response) {
            console.log(response);
            _this.allCategories = response;
        });
        var self = this;
        this.common.getStoredValue('user').then(function (user) {
            self.member_id = user.member_id;
        });
    };
    AddproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddproductPage');
    };
    AddproductPage.prototype.getSelectedCat = function (cat) {
        console.log(cat);
        this.category_id = cat;
    };
    AddproductPage.prototype.submit = function () {
        var _this = this;
        var addSup = {
            "member_id": this.member_id,
            "title_ar": this.title_ar,
            "title_en": this.title_en,
            "image": this.sendimage,
            "details_ar": this.details_ar,
            "details_en": this.details_en,
            "price": this.price,
            "category_id": this.category_id
        };
        console.log(addSup);
        this.sups.addSup(addSup).subscribe(function (response) {
            _this.common.presentToast('تمت اضافة المنتج بنجاح');
            _this.navCtrl.push(SellerproductsPage);
            console.log(response);
        });
    };
    AddproductPage.prototype.serviceImage = function () {
        var _this = this;
        this.common.presentActionSheet('use cam', 'use galery').then(function (res) {
            // console.log(res)
            _this.serviceCam(res);
        });
    };
    AddproductPage.prototype.serviceCam = function (source) {
        var _this = this;
        this.common.camPic(source).then(function (res) {
            // console.log('img',res)
            // this.service_image=res;
            _this.image = 'data:image/jpeg;base64,' + res;
            _this.sendimage = res;
        }).catch(function (e) {
            console.log('cam error :', e);
        });
    };
    AddproductPage = __decorate([
        Component({
            selector: 'page-addproduct',
            templateUrl: 'addproduct.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, SupsProvider, NavController, NavParams])
    ], AddproductPage);
    return AddproductPage;
}());
export { AddproductPage };
//# sourceMappingURL=addproduct.js.map