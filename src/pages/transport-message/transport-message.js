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
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { SelectlocPage } from "../selectloc/selectloc";
import { LandtransportationProvider } from "../../providers/landtransportation/landtransportation";
/**
 * Generated class for the TransportMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransportMessagePage = /** @class */ (function () {
    function TransportMessagePage(modalCtrl, common, v, navCtrl, navParams) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.v = v;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var self = this;
        this.flag = false;
        this.common.getStoredValue('user').then(function (res) {
            if (res != null) {
                _this._member_id = res.member_id;
                _this.flag = true;
            }
            else {
                _this.flag = false;
                // this._member_id=res['member_id']
            }
        });
    }
    TransportMessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendrequestPage');
    };
    TransportMessagePage.prototype.send = function () {
        var _this = this;
        var msg = {
            'member_id': this._member_id,
            // 'member_service_id':this.navParams.data,
            'origin': this.origin,
            'origin_latitude': this.origin_map_lat,
            'origin_longitude': this.origin_map_lng,
            'destination': this.destination,
            'destination_latitude': this.destination_map_lat,
            'destination_longitude': this.destination_map_lng
            // 'subject':this._subject,
            // 'message':this._message
        };
        this.v.sendOrder(msg).subscribe(function (res) {
            console.log(res);
            if (res['error'] == null) {
                _this.common.presentToast('تم الارسال');
                // console.log(res[0][status])
            }
            else {
                _this.common.presentToast('لم يتم الارسال');
            }
        });
    };
    TransportMessagePage.prototype.selectLocoregin = function () {
        var _this = this;
        var townModal = this.modalCtrl.create(SelectlocPage, { 'transportation': true });
        townModal.present();
        townModal.onDidDismiss(function (data) {
            if (data != null) {
                _this.latlng = data.lat + ',' + data.lng;
                _this.origin_map_lat = data.lat;
                _this.origin_map_lng = data.lng;
                _this.origin = data.adress;
                console.log('loc from model :', _this.latlng, data.adress);
            }
            // console.log('loc from model :',data )
        });
        // this.navCtrl.push(SelectlocPage)
    };
    TransportMessagePage.prototype.selectLocdestination = function () {
        var _this = this;
        var townModal = this.modalCtrl.create(SelectlocPage, { 'transportation': true });
        townModal.present();
        townModal.onDidDismiss(function (data) {
            if (data != null) {
                _this.latlng = data.lat + ',' + data.lng;
                _this.destination_map_lat = data.lat;
                _this.destination_map_lng = data.lng;
                _this.destination = data.adress;
                console.log('loc from model :', _this.latlng, data.adress);
            }
            // console.log('loc from model :',data )
        });
        // this.navCtrl.push(SelectlocPage)
    };
    TransportMessagePage = __decorate([
        Component({
            selector: 'page-transport-message',
            templateUrl: 'transport-message.html',
        }),
        __metadata("design:paramtypes", [ModalController, CommonservicesProvider, LandtransportationProvider, NavController, NavParams])
    ], TransportMessagePage);
    return TransportMessagePage;
}());
export { TransportMessagePage };
//# sourceMappingURL=transport-message.js.map