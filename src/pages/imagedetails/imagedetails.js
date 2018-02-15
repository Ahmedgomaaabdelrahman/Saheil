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
import { AlbumProvider } from "../../providers/album/album";
var ImagedetailsPage = /** @class */ (function () {
    function ImagedetailsPage(album, navCtrl, navParams) {
        this.album = album;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ImagedetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log(this.navParams.data);
        this.album.getimage(this.navParams.data).subscribe(function (res) {
            _this.img = res[0]['picpath'];
            console.log('image', res);
            _this.title = res[0]['title_ar'];
        });
    };
    ImagedetailsPage = __decorate([
        Component({
            selector: 'page-imagedetails',
            templateUrl: 'imagedetails.html',
        }),
        __metadata("design:paramtypes", [AlbumProvider, NavController, NavParams])
    ], ImagedetailsPage);
    return ImagedetailsPage;
}());
export { ImagedetailsPage };
//# sourceMappingURL=imagedetails.js.map