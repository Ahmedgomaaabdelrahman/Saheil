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
var EditproductPage = /** @class */ (function () {
    function EditproductPage(common, sups, navCtrl, navParams) {
        this.common = common;
        this.sups = sups;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EditproductPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.supply_id = this.navParams.data;
        console.log(this.supply_id);
        // this.sups.getSupplyDetail(this.supply_id).subscribe(res=>{
        //     console.log(res)
        //
        //   this. title_ar=res.title_ar
        //     this. title_en=res.title_en
        //     this. image=res.image
        //     this. details_ar=res.details_ar
        //     this.  details_en=res.details_en
        //     this.  price=res.price
        //     this.  category_id=res.category_id
        //
        // })
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
    EditproductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddproductPage');
    };
    EditproductPage.prototype.getSelectedCat = function (cat) {
        console.log(cat);
        this.category_id = cat;
    };
    EditproductPage.prototype.submit = function () {
        var _this = this;
        var addSup = {
            "supply_id": this.supply_id,
            "member_id": this.member_id,
            "title_ar": this.title_ar,
            "title_en": this.title_en,
            "image": this.image,
            "details_ar": this.details_ar,
            "details_en": this.details_en,
            "price": this.price,
            "category_id": this.category_id
        };
        console.log(addSup);
        this.sups.editSup(addSup).subscribe(function (response) {
            console.log(response);
            _this.common.presentToast('تم التعديل بنجاح');
        });
    };
    EditproductPage.prototype.serviceImage = function () {
        var _this = this;
        this.common.presentActionSheet('use cam', 'use galery').then(function (res) {
            console.log(res);
            _this.serviceCam(res);
        });
    };
    EditproductPage.prototype.serviceCam = function (source) {
        var _this = this;
        this.common.camPic(source).then(function (res) {
            // console.log('img',res)
            // this.service_image=res;
            _this.image = 'data:image/jpeg;base64,' + res;
        }).catch(function (e) {
            console.log('cam error :', e);
        });
    };
    EditproductPage = __decorate([
        Component({
            selector: 'page-editproduct',
            templateUrl: 'editproduct.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, SupsProvider, NavController, NavParams])
    ], EditproductPage);
    return EditproductPage;
}());
export { EditproductPage };
//# sourceMappingURL=editproduct.js.map