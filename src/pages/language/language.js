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
import { LoadingPage } from '../loading/loading';
import { AlldoctorsPage } from '../alldoctors/alldoctors';
import { NavController, NavParams, Platform, MenuController } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
// import {MainService} from "../../providers/main-service";
import { Storage } from '@ionic/storage';
import { DomainProvider } from "../../providers/domain/domain";
var LanguagePage = /** @class */ (function () {
    function LanguagePage(menuCtrl, navCtrl, navParams, platform, translate, storage, domain) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.translate = translate;
        this.storage = storage;
        this.domain = domain;
        this.menuCtrl.enable(true);
    }
    LanguagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LanguagePage');
    };
    LanguagePage.prototype.gotoNotes = function (type) {
        console.log('ionViewDidLoad LanguagePage', this.translate.getDefaultLang());
        this.translate.use(type);
        DomainProvider.lang = type;
        this.translate.setDefaultLang(type);
        console.log('ionViewDidLoad LanguagePage', this.translate.getDefaultLang());
        this.storage.set('lang', type);
        this.navCtrl.push(LoadingPage);
    };
    LanguagePage.prototype.goDoctors = function () {
        this.navCtrl.push(AlldoctorsPage);
    };
    LanguagePage.prototype.gotoclinks = function () {
        this.navCtrl.push(LoadingPage);
        // this.navCtrl.push(AllclinksPage);
    };
    LanguagePage.prototype.Change_Toggle = function (type) {
        this.translate.setDefaultLang(type);
        this.storage.set('lang', type);
        // MainService.lang = type;
        if (type == 'ar') {
            this.platform.setDir('rtl', true);
            console.log(type);
            console.log("arabic");
        }
        else {
            this.platform.setDir('ltr', true);
            console.log(type);
            console.log("English");
        }
    };
    LanguagePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    LanguagePage = __decorate([
        Component({
            selector: 'page-language',
            templateUrl: 'language.html',
        }),
        __metadata("design:paramtypes", [MenuController, NavController, NavParams,
            Platform,
            TranslateService,
            Storage, DomainProvider])
    ], LanguagePage);
    return LanguagePage;
}());
export { LanguagePage };
//# sourceMappingURL=language.js.map