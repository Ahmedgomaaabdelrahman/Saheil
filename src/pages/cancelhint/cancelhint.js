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
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ComplainPage } from '../complain/complain';
var CancelhintPage = /** @class */ (function () {
    function CancelhintPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CancelhintPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancelhintPage');
    };
    CancelhintPage.prototype.sendcom = function () {
        var modal = this.modalCtrl.create(ComplainPage);
        modal.present();
    };
    CancelhintPage = __decorate([
        Component({
            selector: 'page-cancelhint',
            templateUrl: 'cancelhint.html',
        }),
        __metadata("design:paramtypes", [ModalController, NavController, NavParams])
    ], CancelhintPage);
    return CancelhintPage;
}());
export { CancelhintPage };
//# sourceMappingURL=cancelhint.js.map