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
import { UpcommingEventsProvider } from "../../providers/upcomming-events/upcomming-events";
var NextevedetailsPage = /** @class */ (function () {
    function NextevedetailsPage(upcome, navCtrl, navParams) {
        this.upcome = upcome;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NextevedetailsPage.prototype.ionViewWillEnter = function () {
        var self = this;
        // this.upevents=[]
        this.upcome.upcommingEventDetails(this.navParams.data).subscribe(function (res) {
            // this.upevents=res;
            //   self.newsD=res[0]
            self.title = res[0].title_ar;
            self.details = res[0].details;
            self.picpath = res[0].picpath;
            console.log('ress', res);
        });
    };
    NextevedetailsPage = __decorate([
        Component({
            selector: 'page-nextevedetails',
            templateUrl: 'nextevedetails.html',
        }),
        __metadata("design:paramtypes", [UpcommingEventsProvider, NavController, NavParams])
    ], NextevedetailsPage);
    return NextevedetailsPage;
}());
export { NextevedetailsPage };
//# sourceMappingURL=nextevedetails.js.map