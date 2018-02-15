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
import { MenuController, NavController } from 'ionic-angular';
import { AlldoctorsPage } from '../alldoctors/alldoctors';
import { AllclinksPage } from '../allclinks/allclinks';
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { AirtansportPage } from "../airtansport/airtansport";
import { HrssupsellersPage } from "../hrssupsellers/hrssupsellers";
import { HorsesellerPage } from "../horseseller/horseseller";
import { LivestreamPage } from "../livestream/livestream";
import { TourtablesPage } from '../tourtables/tourtables';
import { AddhorsedaysPage } from '../addhorsedays/addhorsedays';
import { DiariesProvider } from "../../providers/diaries/diaries";
import { HorsedaysPage } from '../horsedays/horsedays';
import { ChatPage } from '../chat/chat';
import { LoginPage } from "../login/login";
import { StreamingMedia } from '@ionic-native/streaming-media';
import { AlbumProvider } from "../../providers/album/album";
import { TransportMessagePage } from "../transport-message/transport-message";
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { GetServicesProvider } from "../../providers/get-services/get-services";
var HomePage = /** @class */ (function () {
    function HomePage(service, nativePageTransitions, album, streamingMedia, diaries, menuCtrl, common, navCtrl) {
        var _this = this;
        this.service = service;
        this.nativePageTransitions = nativePageTransitions;
        this.album = album;
        this.streamingMedia = streamingMedia;
        this.diaries = diaries;
        this.menuCtrl = menuCtrl;
        this.common = common;
        this.navCtrl = navCtrl;
        var self = this;
        this.service.serviceDetails().subscribe(function (res) {
            console.log(res);
            self.servicesDetails = res;
            self.service1 = res[1].details;
            self.service2 = res[2].details;
            self.service3 = res[3].details;
            self.service4 = res[4].details;
            self.service5 = res[5].details;
            self.service6 = res[6].details;
            console.log('ddd', self.servicesDetails);
        });
        // fullscreen video
        //https://ionicframework.com/docs/native/streaming-media/
        // let options: StreamingVideoOptions = {
        //
        //     successCallback: () => { console.log('Video played') },
        //     errorCallback: (e) => { console.log('Error streaming') },
        //     // shouldAutoClose:'true',  // true(default)/false
        //     // controls:'false' // true(default)/false. Used to hide controls on fullscreen
        //             };
        //
        // this.streamingMedia.playVideo('http://www.sahel-horse.com/uploads/videos/5a4921ad2f46f.3gp', options);
        // this.menuCtrl.enable(true)
        this.common.getStoredValue('user').then(function (user) {
            console.log('user : ', user);
            if (user != null) {
                _this.member_id = user['member_id'];
                if (user['service'][0]['service_id'] == 4) {
                    _this.transporterFlag = true;
                }
                else {
                    _this.transporterFlag = false;
                }
            }
        });
    }
    HomePage.prototype.sliderRefresher = function () {
        this.sliderIndex = 0;
        var self = this;
        this.sliderImage = '';
        console.log(self.sliderIndex);
        console.log(self.slideImages[self.sliderIndex]);
        console.log(self.slideImages[self.sliderIndex]['picpath']);
        self.sliderImage = self.slideImages[self.sliderIndex]['picpath'];
        self.sliderIndex++;
        try {
            this.startTimer = setInterval(function () {
                this.sliderImage = '';
                // console.log(self.sliderIndex);
                // console.log(self.slideImages[self.sliderIndex]);
                if (self.slideImages[self.sliderIndex] != null) {
                    self.sliderImage = self.slideImages[self.sliderIndex]['picpath'];
                    if (self.sliderIndex < (self.slideImages.length - 1)) {
                        self.sliderIndex++;
                    }
                    else if (self.sliderIndex == (self.slideImages.length - 1)) {
                        self.sliderIndex = 0;
                    }
                }
            }, 4000);
        }
        catch (e) {
        }
    };
    HomePage.prototype.ionViewWillLeave = function () {
        clearInterval(this.startTimer);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.page = 1;
        this.menuCtrl.enable(true);
        this.items = [];
        this.show = [];
        // this.servicesDetails=[]
        this.slideImages = [];
        var self = this;
        this.album.homeSlider().subscribe(function (res) {
            console.log(res);
            _this.slideImages = res;
            _this.sliderRefresher();
        });
    };
    HomePage.prototype.live = function () {
        this.navCtrl.push(LivestreamPage);
    };
    HomePage.prototype.gotodoctors = function () {
        this.navCtrl.push(AlldoctorsPage);
    };
    HomePage.prototype.gotoclincs = function () {
        this.navCtrl.push(AllclinksPage);
    };
    HomePage.prototype.goTrans = function () {
        this.navCtrl.push(TransportMessagePage);
    };
    HomePage.prototype.goTransAir = function () {
        this.navCtrl.push(AirtansportPage);
    };
    HomePage.prototype.goHorsesupp = function () {
        this.navCtrl.push(HrssupsellersPage);
    };
    HomePage.prototype.goHorseSellers = function () {
        this.navCtrl.push(HorsesellerPage);
    };
    HomePage.prototype.gochat = function () {
        if (this.member_id != null) {
            this.navCtrl.push(ChatPage, { mode: 0 });
        }
        else {
            this.navCtrl.push(LoginPage);
        }
    };
    HomePage.prototype.gohorsdays = function () {
        this.navCtrl.push(HorsedaysPage);
    };
    HomePage.prototype.tours = function () {
        this.navCtrl.push(TourtablesPage);
    };
    HomePage.prototype.addnew = function () {
        this.navCtrl.push(AddhorsedaysPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [GetServicesProvider, NativePageTransitions, AlbumProvider, StreamingMedia, DiariesProvider, MenuController, CommonservicesProvider, NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map