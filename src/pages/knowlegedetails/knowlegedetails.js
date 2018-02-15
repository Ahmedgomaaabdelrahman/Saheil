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
import { CommentsPage } from '../comments/comments';
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { KnowladgeProvider } from "../../providers/knowladge/knowladge";
var KnowlegedetailsPage = /** @class */ (function () {
    function KnowlegedetailsPage(common, news, navCtrl, navParams) {
        this.common = common;
        this.news = news;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KnowlegedetailsPage.prototype.ionViewWillEnter = function () {
        var self = this;
        this.news.getnewsDetails(this.navParams.data).subscribe(function (res) {
            self.newsD = res[0];
            self.title = res[0].title_ar;
            self.details = res[0].details;
            self.attachments = res[0].attachments;
            self.picpath = res[0].picpath;
            console.log('ionViewDidLoad KnowlegedetailsPage', self.newsD);
        });
    };
    KnowlegedetailsPage.prototype.gocomments = function () {
        this.navCtrl.push(CommentsPage);
    };
    KnowlegedetailsPage = __decorate([
        Component({
            selector: 'page-knowlegedetails',
            templateUrl: 'knowlegedetails.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, KnowladgeProvider, NavController, NavParams])
    ], KnowlegedetailsPage);
    return KnowlegedetailsPage;
}());
export { KnowlegedetailsPage };
//# sourceMappingURL=knowlegedetails.js.map