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
import { AuthproviderProvider } from "../../providers/authprovider/authprovider";
import { CommonservicesProvider } from "../../providers/commonservices/commonservices";
import { SelectlocPage } from "../selectloc/selectloc";
import { DomainProvider } from "../../providers/domain/domain";
import { HomePage } from "../home/home";
import { Resorces } from "../../modes/resorces";
import { GetServicesProvider } from "../../providers/get-services/get-services";
var EditaccountPage = /** @class */ (function () {
    function EditaccountPage(services, resources, domain, modalCtrl, common, auth, navCtrl, navParams) {
        var _this = this;
        this.services = services;
        this.resources = resources;
        this.domain = domain;
        this.modalCtrl = modalCtrl;
        this.common = common;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.D = this.domain.url;
        var self = this;
        this.common.getStoredValue('user').then(function (user) {
            console.log('edit user', user);
            try {
                // console.log(user.member_id);
                // console.log(user);
                self.member_id = user.member_id;
                //////////////
                //         self.qPrice=user.price;
                self.qPrice = user.balance;
                self.image = user.image;
                self.username = user.username;
                self.email = user.email;
                self.mobile = user.mobile;
                self.latlng = user.latlng;
                self.password = user.password;
                self.gcm_regid = user.gcm_regid;
                self.service_id = user.service[0].service_id;
                self.service_name_ar = user.service[0].title_ar;
                self.service_name_en = user.service[0].title_en;
                self.service_image = user.members_services[0].service_image;
                self.service_adress_ar = user.members_services[0].service_address_ar;
                self.service_adress_en = user.members_services[0].service_address_en;
                self.service_details_ar = user.members_services[0].service_details_ar;
                self.service_details_en = user.members_services[0].service_details_en;
                self.facebook = user.members_services[0].facebook;
                self.twitter = user.members_services[0].twitter;
                ///////////////
                console.log('lenth :`{{}}` ', user.image);
                if (user.service[0].service_id == -1) {
                    self.normalUserFlag = true;
                    console.log("self.service_id", user.service[0].service_id);
                }
                document.getElementById("profileImage").style.backgroundImage = "url(" + _this.image + ")";
                //         let i=1
                self.services.serviceDetails().subscribe(function (res) {
                    console.log('lenth : ', res);
                    // console.log('lenth : ',res.length)
                    if (res != null) {
                        for (var i = 1; i < res['length']; i++) {
                            if (self.service_id == res[i].service_id) {
                                self.commetion = res[i].commision;
                                console.log(res[i]);
                            }
                        }
                    }
                });
                // this.services.serviceDetails().subscribe(res=>{
                //   console.log('lenth : ',res)
                //   console.log('lenth : ',res.length)
                //   for (let i=1;i<res.length;i++){
                //     if(this.service_id==res[i].service_id){
                //       this.commetion=res[i].commision
                //       console.log(res[i])
                //     }
                //   }
                // })
                console.log(_this.service_id);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    EditaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditaccountPage');
    };
    EditaccountPage.prototype.submit = function () {
        var _this = this;
        var user = {
            'image': this.sendimage,
            'member_id': this.member_id,
            'username': this.username,
            'email': this.email,
            'mobile': this.mobile,
            'map': this.latlng,
            'password': this.password,
            // 'gcm_regid':this.gcm_regid,//cordova fcm
            'gcm_regid': '123456',
            'service_name_ar': this.service_name_ar,
            'service_name_en': this.service_name_en,
            'service_image': this.service_sendimage,
            'service_address_ar': this.service_adress_ar,
            'service_address_en': this.service_adress_en,
            'service_details_ar': this.service_details_ar,
            'service_details_en': this.service_details_en,
            'facebook': this.facebook,
            'twitter': this.twitter,
            'price': this.qPrice
        };
        console.log('u', user);
        var self = this;
        this.common.presentLoadingDefault();
        this.auth.updateInfo(user).subscribe(function (res) {
            if (res['error'] != null) {
                _this.common.loadDismess();
                _this.common.presentToast(res['error']);
                console.log(res);
            }
            else {
                // console.log('res',res)
                _this.common.presentToast('تم التعديل');
                _this.common.loadDismess();
                self.common.getStoredValue('xuser').then(function (u) {
                    var newUser = {
                        mobile: self.mobile,
                        password: self.password,
                        gcm_regid: '123456'
                    };
                    console.log('login info : ', newUser);
                    _this.auth.login(newUser).subscribe(function (storeUser) {
                        self.common.storeValue('user', storeUser);
                        _this.navCtrl.setRoot(HomePage);
                        if (u != null) {
                            self.common.storeValue('xuser', storeUser);
                        }
                    });
                });
            }
        });
    };
    EditaccountPage.prototype.profileImage = function () {
        var _this = this;
        this.common.presentActionSheet(this.resources.CAMERA_AR, this.resources.GALERY_AR).then(function (res) {
            console.log(res);
            _this.profileCam(res);
        });
    };
    EditaccountPage.prototype.serviceImage = function () {
        var _this = this;
        this.common.presentActionSheet(this.resources.CAMERA_AR, this.resources.GALERY_AR).then(function (res) {
            console.log(res);
            _this.serviceCam(res);
        });
    };
    EditaccountPage.prototype.serviceCam = function (source) {
        var _this = this;
        this.common.camPic(source).then(function (res) {
            // console.log('img',res)
            // this.service_image=res;
            _this.service_image = 'data:image/jpeg;base64,' + res;
            _this.service_sendimage = res;
        }).catch(function (e) {
            console.log('cam error :', e);
        });
    };
    EditaccountPage.prototype.profileCam = function (source) {
        var _this = this;
        this.image = '';
        this.sendimage = '';
        this.common.camPic(source).then(function (res) {
            // console.log('img',res)
            // this.image=res;
            _this.image = 'data:image/jpeg;base64,' + res;
            _this.sendimage = res;
        }).catch(function (e) {
            console.log('cam error :', e);
        });
    };
    EditaccountPage.prototype.selectLoc = function () {
        var _this = this;
        var townModal = this.modalCtrl.create(SelectlocPage);
        townModal.present();
        townModal.onDidDismiss(function (data) {
            if (data != null) {
                _this.latlng = data.lat + ',' + data.lng;
                console.log('loc from model :', _this.latlng);
            }
            // console.log('loc from model :',data )
        });
        // this.navCtrl.push(SelectlocPage)
    };
    EditaccountPage = __decorate([
        Component({
            selector: 'page-editaccount',
            templateUrl: 'editaccount.html',
        }),
        __metadata("design:paramtypes", [GetServicesProvider, Resorces, DomainProvider, ModalController, CommonservicesProvider, AuthproviderProvider, NavController, NavParams])
    ], EditaccountPage);
    return EditaccountPage;
}());
export { EditaccountPage };
//# sourceMappingURL=editaccount.js.map