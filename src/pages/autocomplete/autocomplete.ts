import {Component, NgZone} from '@angular/core';
import {ViewController} from 'ionic-angular';
import {ModalController,NavController, NavParams, Platform} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


import {ElementRef, ViewChild} from "@angular/core";
declare var google;
@Component({
  templateUrl: 'autocomplete.html'
})

export class AutocompletePage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  autocompleteItems;
  autocomplete;
  service = new google.maps.places.AutocompleteService();

  constructor (public viewCtrl: ViewController, private zone: NgZone) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  dismiss() {
this.viewCtrl.dismiss();
}

chooseItem(item: any) {
  this.viewCtrl.dismiss(item);
}

updateSearch() {
  if (this.autocomplete.query == '') {
    this.autocompleteItems = [];
    return;
  }
  let me = this;
//////////////////
// this.autocomplete.getPlace();
// console.log( 'places'this.autocomplete.getPlace())
////////////////////
  this.service.getPlacePredictions({ input: this.autocomplete.query
    //to limit to specific countries
    // ,componentRestrictions: {country: 'eg'} 
  }, function (predictions, status) {
    // this.autocomplete.setComponentRestrictions({'country': countries});

    me.autocompleteItems = [];

    me.zone.run(function () {
      // console.log()
      if(predictions!=null){

      predictions.forEach(function (prediction) {
        me.autocompleteItems.push(prediction.description);

      });} else{
        me.autocompleteItems.push("no results");

      }
    });
  });
}
}
