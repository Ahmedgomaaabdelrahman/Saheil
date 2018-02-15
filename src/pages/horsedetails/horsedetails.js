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
import { NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { SendrequestPage } from "../sendrequest/sendrequest";
import { DealersProvider } from "../../providers/dealers/dealers";
// declare var google;
/**
 * Generated class for the HorsedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HorsedetailsPage = /** @class */ (function () {
    function HorsedetailsPage(nav, view, platform, dealers, navParams) {
        this.nav = nav;
        this.view = view;
        this.platform = platform;
        this.dealers = dealers;
        this.navParams = navParams;
        this.markers = [];
    }
    HorsedetailsPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        console.log(this.navParams.data);
        this.details = [];
        this.id = this.navParams.data;
        this.dealers.getSingleHorse(this.id).subscribe(function (v) {
            _this.details = v[0];
            // this.loc=v[0].map;
            // console.log(v[0].map)
            // parseInt(v[0].map)
            // var str = v[0].map;
            // var res = str.split(", ");
            // document.getElementById("demo").innerHTML = parseFloat(res[1]);
            // this.loadMap(parseFloat(v[0].latitude),parseFloat(v[0].longitude));
            // console.log('ddd',v[0])
            // let lat=res[0]
            // let lng=res[1].split(' ')
            // console.log('ddd',parseFloat(v[0].latitude))
            // console.log('ddd',parseFloat(v[0].longitude))
        });
    };
    HorsedetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoctordetailsPage');
    };
    //map
    // loadMap(ll,uu) {
    //
    //     let latLng = new google.maps.LatLng(ll,uu);
    //     console.log(latLng)
    //     let mapOptions = {
    //         // center: latLng,
    //         center:latLng,
    //
    //         zoom: 16,
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //     };
    //
    //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //     // this.map = new google.maps.Map(document.getElementById("map"),mapOptions)
    //     this.addMarker(this.map.getCenter());
    //
    //
    // }
    // addMarker(LatLng){
    //     let marker  = new google.maps.Marker({
    //         map: this.map,
    //         animation: google.maps.Animation.DROP,
    //         position: LatLng
    //     });
    //     this.markers.push(marker);
    //
    //
    // }
    HorsedetailsPage.prototype.contact = function () {
        this.nav.push(SendrequestPage, this.id);
    };
    HorsedetailsPage = __decorate([
        Component({
            selector: 'page-horsedetails',
            templateUrl: 'horsedetails.html',
        }),
        __metadata("design:paramtypes", [NavController, ViewController, Platform, DealersProvider, NavParams])
    ], HorsedetailsPage);
    return HorsedetailsPage;
}());
export { HorsedetailsPage };
//# sourceMappingURL=horsedetails.js.map