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
var OnetourdetailsPage = /** @class */ (function () {
    function OnetourdetailsPage(champs, navCtrl, navParams) {
        this.champs = champs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnetourdetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.tDetails = [];
        console.log('ionViewDidLoad OnetourdetailsPage');
        this.champs.getnewsTournaments(this.navParams.data).subscribe(function (res) {
            console.log(res[0]);
            _this.title = res[0].title_ar;
            _this.title = res[0].title;
            _this.details = res[0].details;
            _this.picpath = res[0].picpath;
            _this.tDetails = res[0];
            _this.winner = res[0].winner;
            _this.points = res[0].points;
            _this.judge = res[0].judge;
            _this.start = res[0].start;
            _this.location = res[0].location;
        });
    };
    OnetourdetailsPage = __decorate([
        Component({
            selector: 'page-onetourdetails',
            templateUrl: 'onetourdetails.html',
        }),
        __metadata("design:paramtypes", [ChampionsNewsProvider, NavController, NavParams])
    ], OnetourdetailsPage);
    return OnetourdetailsPage;
}());
export { OnetourdetailsPage };
//# sourceMappingURL=onetourdetails.js.map