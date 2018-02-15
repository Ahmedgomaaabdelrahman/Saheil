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
import { ImagedetailsPage } from './../imagedetails/imagedetails';
import { AlbumProvider } from "../../providers/album/album";
var AllImagesPage = /** @class */ (function () {
    function AllImagesPage(album, navCtrl, navParams) {
        this.album = album;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllImagesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.imgs = [];
        this.album.getgallery().subscribe(function (res) {
            console.log(res);
            _this.imgs = res;
        });
    };
    AllImagesPage.prototype.gotodtails = function (img_id) {
        this.navCtrl.push(ImagedetailsPage, img_id);
    };
    AllImagesPage = __decorate([
        Component({
            selector: 'page-all-images',
            templateUrl: 'all-images.html',
        }),
        __metadata("design:paramtypes", [AlbumProvider, NavController, NavParams])
    ], AllImagesPage);
    return AllImagesPage;
}());
export { AllImagesPage };
//# sourceMappingURL=all-images.js.map