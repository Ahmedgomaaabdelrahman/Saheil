var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
// import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Component } from "@angular/core/";
import { AutocompletePage } from "../autocomplete/autocomplete";
import { ElementRef, NgZone, ViewChild } from "@angular/core";
import { VeterinariansProvider } from "../../providers/veterinarians/veterinarians";
var SelectlocPage = /** @class */ (function () {
    ///////////
    function SelectlocPage(service, zone, modalCtrl, view, platform, geolocation, navCtrl, navParams) {
        var _this = this;
        this.service = service;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.platform = platform;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.markers = [];
        this.transportersMarkers = [];
        platform.ready().then(function () {
            _this.loadMap();
        });
        var self = this;
        console.log(this.navParams.get('transportation'));
        if (this.navParams.get('transportation') == true) {
            // this.transportationMessageMode=this.navParams.get('transportation');
            this.transporterMarkers = [];
            this.arr = [];
            this.service.getAllServices(4).subscribe(function (res) {
                console.log(res);
                self.arr = res;
                _this.arr.forEach(function (item) {
                    // for(let i;i<self.arr.length;i++){
                    console.log(item.latitude, item.longitude);
                    var latLng = new google.maps.LatLng(item.latitude, item.longitude);
                    self.addTransportersMarkers(latLng, item.title);
                    // }
                });
                // console.log(res)
            }, function (e) { });
        }
        ////////////
        this.address = {
            place: ''
        };
        ///////////
    }
    SelectlocPage.prototype.ionViewWillLoad = function () {
        // this.loadMap()
    };
    SelectlocPage.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(AutocompletePage);
        var me = this;
        modal.onDidDismiss(function (data) {
            _this.address.place = data;
            _this.placelabel = data;
        });
        modal.present();
    };
    SelectlocPage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    SelectlocPage.prototype.loadMap = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                // this.geolocation.getCurrentPosition().then((resp) => {
                //   this.zone.run(()=>resp)
                var latLng = new google.maps.LatLng(pos.lat, pos.lng);
                _this.lat = pos.lat;
                _this.lng = pos.lng;
                var mapOptions = {
                    center: latLng,
                    disableDefaultUI: true,
                    zoom: 10,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                google.maps.event.addListener(_this.map, 'click', function (event) {
                    _this.setMapOnAll(null);
                    var location = event.latLng;
                    _this.lat = location.lat();
                    _this.lng = location.lng();
                    console.log(_this.lat);
                    console.log(_this.lng);
                    _this.addMarker(location);
                });
                _this.addMarker(_this.map.getCenter());
                // }).catch((error) => {
                //
                //   });
                _this.addMarker(_this.map.getCenter());
                // console.log('Error getting location', error);
            });
        }
        else {
            var pos = {
                lat: 0,
                lng: 0
            };
            // this.geolocation.getCurrentPosition().then((resp) => {
            //   this.zone.run(()=>resp)
            var latLng = new google.maps.LatLng(pos.lat, pos.lng);
            this.lat = pos.lat;
            this.lng = pos.lng;
            var mapOptions = {
                center: latLng,
                disableDefaultUI: true,
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            google.maps.event.addListener(this.map, 'click', function (event) {
                _this.setMapOnAll(null);
                var location = event.latLng;
                _this.lat = location.lat();
                _this.lng = location.lng();
                console.log(_this.lat);
                console.log(_this.lng);
                _this.addMarker(location);
            });
            this.addMarker(this.map.getCenter());
            // }).catch((error) => {
            //
            //   });
            this.addMarker(this.map.getCenter());
        }
    };
    SelectlocPage.prototype.addMarker = function (LatLng) {
        console.log('marker', LatLng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: LatLng
        });
        this.markers.push(marker);
    };
    SelectlocPage.prototype.addTransportersMarkers = function (LatLng, title) {
        console.log('addTransportersMarkers', LatLng);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: title,
            icon: 'assets/imgs/mappointer.png',
            position: LatLng
        });
        this.transportersMarkers.push(marker);
        console.log('all markers', this.transportersMarkers);
    };
    SelectlocPage.prototype.sendLocation = function () {
        // this.location = new Location (this.lat,this.lng,this.placelabel);
        // console.log(this.location.lat,this.location.lng,this.location.label);
        this.view.dismiss({ lat: this.lat, lng: this.lng, adress: this.placelabel });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], SelectlocPage.prototype, "mapElement", void 0);
    SelectlocPage = __decorate([
        Component({
            selector: 'page-selectloc',
            templateUrl: 'selectloc.html',
        }),
        __metadata("design:paramtypes", [VeterinariansProvider, NgZone, ModalController, ViewController, Platform, Geolocation, NavController, NavParams])
    ], SelectlocPage);
    return SelectlocPage;
}());
export { SelectlocPage };
//# sourceMappingURL=selectloc.js.map