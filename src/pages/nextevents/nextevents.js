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
import { NextevedetailsPage } from './../nextevedetails/nextevedetails';
import { UpcommingEventsProvider } from "../../providers/upcomming-events/upcomming-events";
var NexteventsPage = /** @class */ (function () {
    function NexteventsPage(upcome, navCtrl, navParams) {
        this.upcome = upcome;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NexteventsPage.prototype.gotodetails = function (id) {
        this.navCtrl.push(NextevedetailsPage, id);
    };
    NexteventsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.upevents = [];
        this.upcome.allUpcommingEvents().subscribe(function (res) {
            _this.upevents = res;
            console.log('ress', res);
        });
    };
    NexteventsPage = __decorate([
        Component({
            selector: 'page-nextevents',
            templateUrl: 'nextevents.html',
        }),
        __metadata("design:paramtypes", [UpcommingEventsProvider, NavController, NavParams])
    ], NexteventsPage);
    return NexteventsPage;
}());
export { NexteventsPage };
//# sourceMappingURL=nextevents.js.map