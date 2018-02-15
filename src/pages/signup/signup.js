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
import { GetServicesProvider } from "../../providers/get-services/get-services";
import { ActivecodePage } from '../activecode/activecode';
import { AuthproviderProvider } from "../../providers/authprovider/authprovider";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { HomePage } from "../home/home";
var SignupPage = /** @class */ (function () {
    function SignupPage(common, auth, services, navCtrl, navParams) {
        this.common = common;
        this.auth = auth;
        this.services = services;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.cs = [];
        this.services.countryid().then(function (res) {
            _this.cs = res;
            console.log(res);
        });
        console.log(this.cs);
        this.services.serviceId().then(function (resS) {
            _this.provideServices = resS;
            console.log(resS);
        });
    };
    SignupPage.prototype.getSelectedKeyCode = function (keyKode) {
        this.keyKode = keyKode;
        console.log(keyKode);
    };
    SignupPage.prototype.getSelectedService = function (service) {
        this._service_id = service;
        console.log(service);
    };
    SignupPage.prototype.getSelectedC = function (c) {
        console.log(c);
        this._country_id = c;
    };
    SignupPage.prototype.submit = function () {
        // let user=new User()
        //     this.services.getToken().then(token=>{
        var _this = this;
        var User = {
            username: this._username,
            email: this._email,
            mobile: "" + this.keyKode + this._mobile,
            password: this._password,
            // gcm_regid:token,
            gcm_regid: '12342',
            country_id: this._country_id,
            service_id: this._service_id
        };
        console.log('user', User);
        this.common.presentLoadingDefault('سوف يتم التسجيل برجاء الانتظار');
        this.auth.register(User).subscribe(function (res) {
            console.log(res);
            _this.common.loadDismess();
            if (res['error'] != null) {
                _this.common.presentToast(res['error']);
                console.log(res);
            }
            else {
                _this.common.presentToast('تم التسجيل بنجاح');
                _this.common.storeValue('xuser', User);
                //for chck auth
                _this.common.storeValue('user', res).then(function () {
                    _this.common.eventPublish('auth', true);
                });
                _this.navCtrl.setRoot(HomePage);
                console.log('تم التسجيل بنجاح');
            }
        });
        // })
    };
    SignupPage.prototype.gotoActive = function () {
        this.navCtrl.push(ActivecodePage);
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [CommonservicesProvider,
            AuthproviderProvider, GetServicesProvider, NavController, NavParams])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map