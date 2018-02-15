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
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { ForgetpassPage } from '../forgetpass/forgetpass';
import { AuthproviderProvider } from "../../providers/authprovider/authprovider";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { GetServicesProvider } from "../../providers/get-services/get-services";
import { HomePage } from "../home/home";
var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, auth, common, getService, modalCtrl, navCtrl, navParams) {
        this.menuCtrl = menuCtrl;
        this.auth = auth;
        this.common = common;
        this.getService = getService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingMSG = 'برجاء الانتظار';
        this.succsesMSG = 'مرحباّ!';
        // this.menuCtrl.enable(false)
    }
    LoginPage.prototype.submit = function () {
        var _this = this;
        // this.getService.getToken().then(token=>{
        var user = {
            mobile: this._mobile,
            password: this._password,
            gcm_regid: '123456'
        };
        console.log('send', user);
        this.common.presentLoadingDefault(this.loadingMSG);
        this.auth.login(user).subscribe(function (res) {
            if (res['error'] != null) {
                _this.common.loadDismess();
                _this.common.presentToast(res['error']);
            }
            else {
                //for chck auth
                _this.common.storeValue('user', res).then(function () {
                    _this.common.eventPublish('auth', true);
                });
                //for autologin
                if (_this._save) {
                    _this.common.storeValue('xuser', res).then(function () {
                        _this.common.eventPublish('auth', true);
                    });
                }
                _this.common.loadDismess();
                _this.common.presentToast(_this.succsesMSG);
                console.log(res);
                _this.navCtrl.setRoot(HomePage, res);
            }
        });
        // })
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.forgetPass = function () {
        var modal = this.modalCtrl.create(ForgetpassPage);
        modal.present();
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [MenuController,
            AuthproviderProvider,
            CommonservicesProvider,
            GetServicesProvider, ModalController, NavController, NavParams])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map