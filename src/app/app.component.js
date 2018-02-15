var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LanguagePage } from '../pages/language/language';
import { CommonservicesProvider } from "../providers/commonservices/commonservices";
import { LoginPage } from "../pages/login/login";
import { AuthproviderProvider } from "../providers/authprovider/authprovider";
import { EditaccountPage } from "../pages/editaccount/editaccount";
import { KnowlegePage } from "../pages/knowlege/knowlege";
import { ConsultationPage } from '../pages/consultation/consultation';
import { AddproductPage } from './../pages/addproduct/addproduct';
import { Users } from '../modes/users';
import { SellerproductsPage } from "../pages/sellerproducts/sellerproducts";
import { FavtypePage } from './../pages/favtype/favtype';
import { OnetourPage } from "../pages/onetour/onetour";
import { AllImagesPage } from "../pages/all-images/all-images";
import { NexteventsPage } from './../pages/nextevents/nextevents';
import { MyhorsesPage } from "../pages/myhorses/myhorses";
import { Daf3Page } from './../pages/daf3/daf3';
import { InboxchatPage } from "../pages/inboxchat/inboxchat";
import { FollowaccountsPage } from './../pages/followaccounts/followaccounts';
import { SucesspatnerPage } from './../pages/sucesspatner/sucesspatner';
import { SecuritytermsPage } from './../pages/securityterms/securityterms';
import { TransportationCustomerHistoryPage } from "../pages/transportation-customer-history/transportation-customer-history";
import { SignupPage } from "../pages/signup/signup";
import { DomainProvider } from "../providers/domain/domain";
import { TranslateService } from "@ngx-translate/core";
import { AboutsahielPage } from "../pages/aboutsahiel/aboutsahiel";
var MyApp = /** @class */ (function () {
    function MyApp(translate, domain, user, events, platform, statusBar, splashScreen, common, auth) {
        var _this = this;
        this.translate = translate;
        this.domain = domain;
        this.user = user;
        this.events = events;
        this.common = common;
        this.auth = auth;
        this.flag = false;
        this.supsSellerFlag = false;
        this.horseSellerFlag = false;
        this.transporterFlag = false;
        platform.ready().then(function () {
            var self = _this;
            statusBar.styleDefault();
            splashScreen.hide();
            // DomainProvider.lang='ar'
            // self.translate.setDefaultLang('ar');
            _this.common.getStoredValue('lang').then(function (lang) {
                if (lang != null) {
                    console.log(lang);
                    DomainProvider.lang = lang;
                    self.translate.use(lang);
                }
                else {
                    DomainProvider.lang = 'ar';
                    self.translate.use('ar');
                }
            });
            // console.log('user',this.user.getuser())
            _this.events.subscribe('auth', function (res) {
                console.log(res);
                _this.identifyUser();
            }); // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.common.getStoredValue('xuser').then(function (user) {
                // console.log(user);
                if (user != null) {
                    _this.identifyUser();
                    _this.nav.setRoot(HomePage, user);
                }
                else {
                    _this.diableFlags();
                    _this.nav.setRoot(LanguagePage);
                }
            });
        });
    }
    MyApp.prototype.updateInfo = function () {
        this.nav.push(EditaccountPage);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.common.presentLoadingDefault();
        this.common.getStoredValue('user').then(function (user) {
            console.log(user.member_id);
            _this.auth.logout(user.member_id).subscribe(function (res) {
                console.log(res);
                _this.common.loadDismess();
                _this.nav.setRoot(LoginPage);
                _this.diableFlags();
            });
        });
    };
    MyApp.prototype.diableFlags = function () {
        this.common.removeStoredKey('xuser');
        this.common.removeStoredKey('user');
        this.flag = false;
        this.supsSellerFlag = false;
        this.horseSellerFlag = false;
        this.transporterFlag = false;
    };
    MyApp.prototype.knowladge = function () {
        this.nav.push(KnowlegePage);
    };
    MyApp.prototype.goToMain = function () {
        this.nav.push(HomePage);
    };
    MyApp.prototype.identifyUser = function () {
        var _this = this;
        this.common.getStoredValue('user').then(function (user) {
            if (user != null) {
                _this.flag = true;
            }
            else {
                _this.flag = false;
            }
            if (user['service'] != null) {
                _this.user.setuser(user.service[0].service_id);
                console.log('flag check', _this.user.getuser() == 5);
                // if(user!=null){
                //     this.flag=true
                //
                // }else{
                //     this.flag=false
                // }
                if (_this.user.getuser() == 5) {
                    _this.supsSellerFlag = true;
                }
                else {
                    _this.supsSellerFlag = false;
                }
                if (_this.user.getuser() == 6) {
                    _this.horseSellerFlag = true;
                }
                else {
                    _this.horseSellerFlag = false;
                }
                if (_this.user.getuser() == 4) {
                    _this.transporterFlag = true;
                }
                else {
                    _this.transporterFlag = false;
                }
            }
        });
    };
    MyApp.prototype.login = function () {
        this.nav.push(LoginPage);
    };
    MyApp.prototype.signUp = function () {
        this.nav.push(SignupPage);
    };
    MyApp.prototype.inbox = function () {
        this.nav.push(ConsultationPage, 'in');
    };
    MyApp.prototype.outbox = function () {
        this.nav.push(ConsultationPage, 'out');
    };
    MyApp.prototype.supsSeller = function () {
        this.nav.push(SellerproductsPage);
    };
    MyApp.prototype.fav = function () {
        this.nav.push(FavtypePage);
    };
    MyApp.prototype.terms = function () {
        this.nav.push(SecuritytermsPage);
    };
    MyApp.prototype.accounts = function () {
        this.nav.push(FollowaccountsPage);
    };
    MyApp.prototype.sucesspart = function () {
        this.nav.push(SucesspatnerPage);
    };
    MyApp.prototype.addproduct = function () {
        this.nav.push(AddproductPage);
    };
    MyApp.prototype.addHorse = function () {
        this.nav.push(MyhorsesPage);
    };
    MyApp.prototype.goAlbum = function () {
        this.nav.push(AllImagesPage);
    };
    MyApp.prototype.nextEvent = function () {
        this.nav.push(NexteventsPage);
    };
    MyApp.prototype.pay = function () {
        this.nav.push(Daf3Page);
    };
    MyApp.prototype.tournmentsNews = function () {
        this.nav.push(OnetourPage);
    };
    MyApp.prototype.chatBox = function () {
        this.nav.push(InboxchatPage);
    };
    MyApp.prototype.transportationReq = function () {
        this.nav.push(TransportationCustomerHistoryPage);
    };
    MyApp.prototype.aboutUs = function () {
        this.nav.push(AboutsahielPage);
    };
    __decorate([
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [TranslateService,
            DomainProvider, Users, Events, Platform, StatusBar, SplashScreen, CommonservicesProvider, AuthproviderProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map