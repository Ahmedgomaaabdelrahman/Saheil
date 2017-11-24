import {NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import { Component } from "@angular/core/";
import {ElementRef, ViewChild} from "@angular/core";
/**
 * Generated class for the SelectlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-selectloc',
  templateUrl: 'selectloc.html',
})
export class SelectlocPage {
    @ViewChild('map') mapElement: ElementRef;
    public map: any;
    public markers =[];
    public location:Location;
    public lat ;
    public lng ;
    public placelabel:string;
    public customerid : string;
    constructor(public view:ViewController,public platform:Platform,public geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams){
        platform.ready().then(() => {
            this.loadMap();
        });
    }

    ionViewDidLoad() {
    }
    setMapOnAll(map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }
loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
        let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        let mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        google.maps.event.addListener(this.map, 'click', (event) => {
            this.setMapOnAll(null);
            var location  = event.latLng;
            this.lat = location.lat();
            this.lng = location.lng();
            console.log(this.lat);
            console.log(this.lng);
            this.addMarker(location);
        });
        this.addMarker(this.map.getCenter());

    }).catch((error) => {
        console.log('Error getting location', error);
    });
}
    addMarker(LatLng){
        let marker  = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: LatLng
        });
        this.markers.push(marker);


    }
    sendLocation(){
    // let location = new Location (this.lat,this.lng,this.placelabel);
    console.log(this.lat,this.lng);
    this.view.dismiss({lat:this.lat,lng:this.lng})}
}