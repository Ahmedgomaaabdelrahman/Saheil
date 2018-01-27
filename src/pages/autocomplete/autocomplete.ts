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
  this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: {country: 'TH'} }, function (predictions, status) {
    me.autocompleteItems = [];
    me.zone.run(function () {
      predictions.forEach(function (prediction) {
        me.autocompleteItems.push(prediction.description);
      });
    });
  });
}
}
