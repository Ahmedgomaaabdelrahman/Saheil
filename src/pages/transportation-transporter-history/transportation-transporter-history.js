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
import { LandtransportationProvider } from "../../providers/landtransportation/landtransportation";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
/**
 * Generated class for the TransportationTransporterHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransportationTransporterHistoryPage = /** @class */ (function () {
    function TransportationTransporterHistoryPage(transportationProvider, common, navCtrl, navParams) {
        var _this = this;
        this.transportationProvider = transportationProvider;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.common.getStoredValue('user').then(function (res) {
            if (res != null) {
                _this._member_id = res.member_id;
            }
        });
    }
    TransportationTransporterHistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._allHistoryOrders = [];
        var member = { 'member_id': this._member_id };
        console.log(member);
        this.transportationProvider.transporterHistory(member).subscribe(function (res) {
            console.log(res);
            res[0] = _this._allHistoryOrders;
        });
    };
    TransportationTransporterHistoryPage = __decorate([
        Component({
            selector: 'page-transportation-transporter-history',
            templateUrl: 'transportation-transporter-history.html',
        }),
        __metadata("design:paramtypes", [LandtransportationProvider, CommonservicesProvider, NavController, NavParams])
    ], TransportationTransporterHistoryPage);
    return TransportationTransporterHistoryPage;
}());
export { TransportationTransporterHistoryPage };
//# sourceMappingURL=transportation-transporter-history.js.map