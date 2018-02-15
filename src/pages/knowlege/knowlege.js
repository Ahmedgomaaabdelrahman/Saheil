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
import { KnowlegedetailsPage } from '../knowlegedetails/knowlegedetails';
import { KnowladgeProvider } from "../../providers/knowladge/knowladge";
var KnowlegePage = /** @class */ (function () {
    function KnowlegePage(news, navCtrl, navParams) {
        this.news = news;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KnowlegePage.prototype.ionViewWillEnter = function () {
        this.allnews = [];
        console.log('ionViewDidLoad KnowlegePage');
        this._getAllnews();
    };
    KnowlegePage.prototype._getAllnews = function () {
        var _this = this;
        this.news.getAllnews().subscribe(function (res) {
            console.log(res);
            _this.allnews = res;
        });
    };
    KnowlegePage.prototype.gotodetails = function (news_Id) {
        this.navCtrl.push(KnowlegedetailsPage, news_Id);
    };
    KnowlegePage = __decorate([
        Component({
            selector: 'page-knowlege',
            templateUrl: 'knowlege.html',
        }),
        __metadata("design:paramtypes", [KnowladgeProvider, NavController, NavParams])
    ], KnowlegePage);
    return KnowlegePage;
}());
export { KnowlegePage };
//# sourceMappingURL=knowlege.js.map