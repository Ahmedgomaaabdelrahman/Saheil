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
import { GetServicesProvider } from "../../providers/get-services/get-services";
import { Resorces } from "../../modes/resorces";
import { DomainProvider } from "../../providers/domain/domain";
var AddhorsePage = /** @class */ (function () {
    function AddhorsePage(domain, resources, services, common, dealer, navCtrl, navParams) {
        this.domain = domain;
        this.resources = resources;
        this.services = services;
        this.common = common;
        this.dealer = dealer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(DomainProvider.lang);
        this.lang = DomainProvider.lang;
    }
    AddhorsePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.allCategories = [];
        this.dealer.gethorseCategoties().subscribe(function (response) {
            console.log(response);
            _this.allCategories = response;
        });
        var self = this;
        this.common.getStoredValue('user').then(function (user) {
            self.member_id = user.member_id;
        });
        this.cs = [];
        this.services.countryid().then(function (res) {
            _this.cs = res;
            console.log(res);
        });
    };
    AddhorsePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddproductPage');
    };
    AddhorsePage.prototype.getSelectedCat = function (cat) {
        console.log(cat);
        this.category_id = cat;
    };
    AddhorsePage.prototype.submit = function () {
        var Horse = {
            "member_id": this.member_id,
            "title_ar": this.title_ar,
            "title_en": this.title_en,
            "image": this.sendimage,
            "details_ar": this.details_ar,
            "details_en": this.details_en,
            "price": this.price,
            "category_id": this.category_id,
            "color": this.color,
            "age": this.age,
            "homeland": this.homeland,
            "gender": this.gender,
            "mother": this.mother,
            "father": this.father,
            "horse_breed": this.horse_breed,
            "horse_breed_image": this.horse_breed_imagesend
        };
        console.log(Horse);
        this.dealer.addHorse(Horse).subscribe(function (response) {
            console.log(response);
        });
    };
    AddhorsePage.prototype.serviceImage = function () {
        var _this = this;
        this.common.presentActionSheet(this.resources.CAMERA_AR, this.resources.GALERY_AR).then(function (res) {
            // console.log(res)
            _this.serviceCam(res);
        });
    };
    AddhorsePage.prototype.serviceCam = function (source) {
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
    AddhorsePage.prototype.serviceImagebreed_image = function () {
        var _this = this;
        this.common.presentActionSheet(this.resources.CAMERA_AR, this.resources.GALERY_AR).then(function (res) {
            // console.log(res)
            _this.serviceCambreed_image(res);
        });
    };
    AddhorsePage.prototype.serviceCambreed_image = function (source) {
        var _this = this;
        this.common.camPic(source).then(function (res) {
            // console.log('img',res)
            // this.service_image=res;
            _this.horse_breed_image = 'data:image/jpeg;base64,' + res;
            _this.horse_breed_imagesend = res;
        }).catch(function (e) {
            console.log('cam error :', e);
        });
    };
    AddhorsePage.prototype.getSelectedC = function (c) {
        console.log(c);
        this.country_id = c;
    };
    AddhorsePage = __decorate([
        Component({
            selector: 'page-addhorse',
            templateUrl: 'addhorse.html',
        }),
        __metadata("design:paramtypes", [DomainProvider, Resorces, GetServicesProvider, CommonservicesProvider, DealersProvider, NavController, NavParams])
    ], AddhorsePage);
    return AddhorsePage;
}());
export { AddhorsePage };
//# sourceMappingURL=addhorse.js.map