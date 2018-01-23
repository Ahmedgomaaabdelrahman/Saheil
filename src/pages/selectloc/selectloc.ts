import {ModalController,NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import { Component } from "@angular/core/";
import {AutocompletePage} from "../autocomplete/autocomplete";

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
    ////////////
  address
  ///////////
    constructor(private modalCtrl: ModalController,public view:ViewController,public platform:Platform,public geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams){
        // platform.ready().then(() => {
            this.loadMap();
        // });
      ////////////
      this.address = {
        place: ''
      };
      ///////////
    }
  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
    });
    modal.present();
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
        // this.location = new Location (this.lat,this.lng,this.placelabel);
        // console.log(this.location.lat,this.location.lng,this.location.label);
    this.view.dismiss({lat:this.lat,lng:this.lng,adress:this.placelabel})
    }
}
