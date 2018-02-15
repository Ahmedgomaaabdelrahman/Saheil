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
import { LandtransportationProvider } from "../../providers/landtransportation/landtransportation";
import { TransportPage } from './../transport/transport';
/**
 * Generated class for the TransportationCustomerHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var TransportationCustomerHistoryPage = /** @class */ (function () {
    function TransportationCustomerHistoryPage(transportationProvider, common, navCtrl, navParams) {
        this.transportationProvider = transportationProvider;
        this.common = common;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransportationCustomerHistoryPage.prototype.ionViewWillLoad = function () {
        this._allHistoryOrders = [];
        var self = this;
        // let member={'member_id':4}
        ////////////////////
        this.common.getStoredValue('user').then(function (res) {
            if (res != null) {
                self._member_id = res.member_id;
                var member = { 'member_id': res.member_id };
                console.log('obj', member);
                self.transportationProvider.customerHistory(member).subscribe(function (data) {
                    self._allHistoryOrders = data;
                    console.log(data);
                });
            }
        });
        ///////////////////////
    };
    TransportationCustomerHistoryPage.prototype.histdetails = function (order) {
        this.navCtrl.push(TransportPage, order);
    };
    TransportationCustomerHistoryPage = __decorate([
        Component({
            selector: 'page-transportation-customer-history',
            templateUrl: 'transportation-customer-history.html',
        }),
        __metadata("design:paramtypes", [LandtransportationProvider, CommonservicesProvider, NavController, NavParams])
    ], TransportationCustomerHistoryPage);
    return TransportationCustomerHistoryPage;
}());
export { TransportationCustomerHistoryPage };
//# sourceMappingURL=transportation-customer-history.js.map