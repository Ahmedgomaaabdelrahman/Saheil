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
import { DiariesProvider } from "../../providers/diaries/diaries";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { HorsedaysPage } from "../horsedays/horsedays";
import { Resorces } from "../../modes/resorces";
var AddhorsedaysPage = /** @class */ (function () {
    function AddhorsedaysPage(resources, common, diaries, navCtrl, navParams) {
        this.resources = resources;
        this.common = common;
        this.diaries = diaries;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddhorsedaysPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.common.getStoredValue('user').then(function (user) {
            _this.member_id = user.member_id;
        });
    };
    AddhorsedaysPage.prototype.submit = function () {
        var _this = this;
        var diaries = {
            "member_id": this.member_id,
            "title_ar": this.title_ar,
            // "title_en" :this.title_en,
            "image": this.sendimage,
            "video": this.video,
        };
        // console.log(diaries)
        this.common.presentLoadingDefault();
        this.diaries.addDiaries(diaries).subscribe(function (response) {
            if (!response['error']) {
                _this.common.loadDismess();
                _this.common.presentToast('تمت الاضافة بنجاح ');
                _this.navCtrl.setRoot(HorsedaysPage);
            }
            else {
                _this.common.loadDismess();
                _this.common.presentToast('لم تتم الاضافة');
            }
            console.log(response);
        });
    };
    AddhorsedaysPage.prototype.serviceImage = function () {
        var _this = this;
        this.show = true;
        this.common.presentActionSheet(this.resources.CAMERA_AR, this.resources.GALERY_AR).then(function (res) {
            // console.log(res)
            _this.serviceCam(res);
        });
    };
    AddhorsedaysPage.prototype.serviceVideo = function () {
        var _this = this;
        this.show = false;
        var self = this;
        this.common.media().then(function (res) {
            console.log('video', res[0]['fullPath']);
            // self.image= res[0]['fullPath']
            // this.common.fileUpload(self.image,'http://www.hefny.me/TestApi.php')
            _this.common.toBase64(res[0]['fullPath']).then(function (base64) {
                var str = base64;
                var res = str.split("data:image/*;charset=utf-8;base64,");
                _this.video = res[1];
                console.log(res[1]);
            }).catch(function (e) {
                console.log(e);
                _this.common.presentToast('خطأ');
            });
        }).catch(function (e) {
            console.log(e);
            _this.common.presentToast('خطأ');
        });
    };
    AddhorsedaysPage.prototype.serviceCam = function (source) {
        var _this = this;
        this.common.camPic(source).then(function (res) {
            // console.log('img',res)
            // this.service_image=res;
            _this.image = 'data:image/jpeg;base64,' + res;
            _this.sendimage = res;
        }).catch(function (e) {
            console.log('cam error :', e);
        });
    };
    AddhorsedaysPage = __decorate([
        Component({
            selector: 'page-addhorsedays',
            templateUrl: 'addhorsedays.html',
        }),
        __metadata("design:paramtypes", [Resorces, CommonservicesProvider, DiariesProvider, NavController, NavParams])
    ], AddhorsedaysPage);
    return AddhorsedaysPage;
}());
export { AddhorsedaysPage };
//# sourceMappingURL=addhorsedays.js.map