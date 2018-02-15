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
import { ChampionsNewsProvider } from "../../providers/champions-news/champions-news";
import { DomSanitizer } from '@angular/platform-browser';
var LivestreamPage = /** @class */ (function () {
    function LivestreamPage(sanitizer, champs, navCtrl, navParams) {
        this.sanitizer = sanitizer;
        this.champs = champs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LivestreamPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.champs.live().subscribe(function (res) {
            _this.stream = res[0]['stream'];
            _this.getSafeUrl(_this.stream);
            _this.details = res[0]['details'];
            _this.title = res[0]['title'];
            console.log();
            console.log('reeees', res);
        });
    };
    LivestreamPage.prototype.getSafeUrl = function (url) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    LivestreamPage = __decorate([
        Component({
            selector: 'page-livestream',
            templateUrl: 'livestream.html',
        }),
        __metadata("design:paramtypes", [DomSanitizer, ChampionsNewsProvider, NavController, NavParams])
    ], LivestreamPage);
    return LivestreamPage;
}());
export { LivestreamPage };
//# sourceMappingURL=livestream.js.map