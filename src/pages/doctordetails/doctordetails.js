var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { VeterinariansProvider } from "../../providers/veterinarians/veterinarians";
import { SendrequestPage } from "../sendrequest/sendrequest";
var DoctordetailsPage = /** @class */ (function () {
    function DoctordetailsPage(nav, view, platform, veterinarian, navParams) {
        this.nav = nav;
        this.view = view;
        this.platform = platform;
        this.veterinarian = veterinarian;
        this.navParams = navParams;
        this.markers = [];
        platform.ready().then(function () {
            // this.loadMap();
        });
    }
    DoctordetailsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log(this.navParams.data);
        this.details = [];
        this.id = this.navParams.data;
        this.veterinarian.getVeterinarianDetail(this.id).subscribe(function (v) {
            _this.details = v[0];
            // this.loc=v[0].map;
            // console.log(v[0].map)
            // parseInt(v[0].map)
            // var str = v[0].map;
            // var res = str.split(", ");
            // document.getElementById("demo").innerHTML = parseFloat(res[1]);
            _this.loadMap(parseFloat(v[0].latitude), parseFloat(v[0].longitude));
            console.log('ddd', v[0]);
            // let lat=res[0]
            // let lng=res[1].split(' ')
            // console.log('ddd',parseFloat(v[0].latitude))
            // console.log('ddd',parseFloat(v[0].longitude))
        });
    };
    DoctordetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctordetailsPage');
    };
    //map
    DoctordetailsPage.prototype.loadMap = function (ll, uu) {
        var latLng = new google.maps.LatLng(ll, uu);
        console.log(latLng);
        var mapOptions = {
            // center: latLng,
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // this.map = new google.maps.Map(document.getElementById("map"),mapOptions)
        this.addMarker(this.map.getCenter());
    };
    DoctordetailsPage.prototype.addMarker = function (LatLng) {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: LatLng
        });
        this.markers.push(marker);
    };
    DoctordetailsPage.prototype.contact = function () {
        this.nav.push(SendrequestPage, this.id);
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], DoctordetailsPage.prototype, "mapElement", void 0);
    DoctordetailsPage = __decorate([
        Component({
            selector: 'page-doctordetails',
            templateUrl: 'doctordetails.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController, Platform, VeterinariansProvider, NavParams])
    ], DoctordetailsPage);
    return DoctordetailsPage;
}());
export { DoctordetailsPage };
//# sourceMappingURL=doctordetails.js.map