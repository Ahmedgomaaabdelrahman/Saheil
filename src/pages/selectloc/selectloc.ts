import {ModalController,NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
// import {BehaviorSubject} from "rxjs/BehaviorSubject";

import { Component } from "@angular/core/";
import {AutocompletePage} from "../autocomplete/autocomplete";

import {ElementRef, NgZone, ViewChild} from "@angular/core";
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
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
  arr

  public location:Location;
  public lat ;
  public lng ;
  public placelabel:string;
  public customerid : string;
  transportationMessageMode:boolean;

  ////////////
  address
  ///////////
  constructor(public service:VeterinariansProvider,public zone:NgZone,private modalCtrl: ModalController,public view:ViewController,public platform:Platform,public geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams){
    platform.ready().then(() => {
    this.loadMap()
    });
    let self=this
    console.log(this.navParams.get('transportation'))
    if(this.navParams.get('transportation')==true){
      // this.transportationMessageMode=this.navParams.get('transportation');
      this.transporterMarkers=[]
      // this.arr=[]
      // this.service.getAllServices(4).subscribe((res)=>{
      //   self.arr=res
      //   this.arr.forEach( (item) =>{
      //     // for(let i;i<self.arr.length;i++){
      //     console.log(item.latitude,item.longitude)

      //     let latLng = new google.maps.LatLng(item.latitude,item.longitude);

      //     self.addTransportersMarkers(latLng,item.title)
      //     // }
      //   })
      //   // console.log(res)
      // },(e)=>{})
    }
    ////////////
    this.address = {
      place: ''
    };
    ///////////
  }
  ionViewWillLoad(){
    // this.loadMap()

  }
  showAddressModal () {
    let modal = this.modalCtrl.create(AutocompletePage);
    let me = this;
    modal.onDidDismiss(data => {
      this.address.place = data;
      this.placelabel=data;
    });
    modal.present();
  }
  transporterMarkers
  setMapOnAll(map) {

    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  }
  loadMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }

      // this.geolocation.getCurrentPosition().then((resp) => {
      //   this.zone.run(()=>resp)
        let latLng = new google.maps.LatLng(pos.lat, pos.lng);
        this.lat = pos.lat;
        this.lng = pos.lng;
        let mapOptions = {
          center: latLng,
          disableDefaultUI: true,
          zoom: 22,
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

      // }).catch((error) => {
      //
      //   });
        this.addMarker(this.map.getCenter());
        // console.log('Error getting location', error);
      })
    }else{
      let pos = {
        lat: 0,
        lng: 0
      }

      // this.geolocation.getCurrentPosition().then((resp) => {
      //   this.zone.run(()=>resp)
      let latLng = new google.maps.LatLng(pos.lat, pos.lng);
      this.lat = pos.lat;
      this.lng = pos.lng;
      let mapOptions = {
        center: latLng,
        disableDefaultUI: true,
        zoom: 22,
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

      // }).catch((error) => {
      //
      //   });
      this.addMarker(this.map.getCenter());

    }
      }
    addMarker(LatLng){
      console.log('marker',LatLng)
      let marker  = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: LatLng
      });
      this.markers.push(marker);


    }
    transportersMarkers=[];
    addTransportersMarkers(LatLng,title){
      console.log('addTransportersMarkers',LatLng)
      let marker  = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        title:title,
        icon:'assets/imgs/address.png',

        position: LatLng
      });
      this.transportersMarkers.push(marker);

      console.log('all markers',this.transportersMarkers)
    }
    sendLocation(){
      // this.location = new Location (this.lat,this.lng,this.placelabel);
      // console.log(this.location.lat,this.location.lng,this.location.label);
      this.view.dismiss({lat:this.lat,lng:this.lng,adress:this.placelabel})
    }
  }

