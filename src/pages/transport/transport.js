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
import { TransportionhisdetailsPage } from "../transportionhisdetails/transportionhisdetails";
import { LandtransportationProvider } from "../../providers/landtransportation/landtransportation";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
var TransportPage = /** @class */ (function () {
    // public order:boolean = true;
    // public contine:boolean = false;
    // constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    //
    //
    // }
    //
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad TransportPage');
    // }
    // Order(){
    //   this.order = false;
    // }
    // Contiue(){
    //  this.contine = true;
    //  document.getElementById('order').style.display = 'none';
    //  document.getElementById('infodiv').style.display = 'block';
    // }
    function TransportPage(common, orderProvider, navCtrl, navParams) {
        this.common = common;
        this.orderProvider = orderProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TransportPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.common.getStoredValue('user').then(function (user) {
            console.log(user['service'][0]['service_id']);
            if (user['service'][0]['service_id'] == 4) {
                _this.transporterFlag = true;
            }
            else {
                _this.transporterFlag = false;
            }
        });
        this.transporterFlag = false;
        this._order = this.navParams.data;
        this.order_id = this._order.order_id;
        this.transport_service_provider = this._order.transport_service_provider;
        this.mobile = this._order.mobile;
        this.origin = this._order.origin;
        this.destination = this._order.destination;
        this.cost = this._order.cost;
        this.distance = this._order.distance;
        this.status = this._order.status;
        this.created = this._order.created;
    };
    TransportPage.prototype.action = function (action) {
        var _this = this;
        console.log(action);
        var sendAction = {
            'order_id': this.order_id,
            'status': action
        };
        this.orderProvider.customerConfirm(sendAction).subscribe(function (res) {
            console.log(res);
            _this.order_id = _this._order.order_id;
            _this.transport_service_provider = _this._order.transport_service_provider;
            _this.mobile = _this._order.mobile;
            _this.origin = _this._order.origin;
            _this.destination = _this._order.destination;
            _this.cost = _this._order.cost;
            _this.status = res['status'];
            _this.created = _this._order.created;
        });
    };
    TransportPage.prototype.complain = function () {
        var _this = this;
        this.common.getStoredValue('user').then(function (res) {
            var msg = {
                "order_id": _this.order_id,
                "member_id": res.member_id,
                "message": _this.sendComplain
            };
            _this.orderProvider.customerComplaint(msg).subscribe(function (res) {
                _this.common.presentToast('تم الارسال');
            });
        });
    };
    TransportPage.prototype.fee = function () {
        this.navCtrl.push(TransportionhisdetailsPage, this.navParams.data);
        //  let modal = this.modalCtrl.create(FeePage);
        // modal.present();
    };
    TransportPage.CONTINUE = "continue";
    TransportPage.CANCEL = "cancel";
    TransportPage.FINISH = "finish";
    TransportPage.CONFIRM = "confirm";
    TransportPage = __decorate([
        Component({
            selector: 'page-transport',
            templateUrl: 'transport.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider, LandtransportationProvider, NavController, NavParams])
    ], TransportPage);
    return TransportPage;
}());
export { TransportPage };
//   finish()
//   {
//    let modal = this.modalCtrl.create(CancelhintPage);
//    modal.present();
//   }
// }
//# sourceMappingURL=transport.js.map