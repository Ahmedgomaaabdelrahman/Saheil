var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgZone } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ElementRef, ViewChild } from "@angular/core";
var AutocompletePage = /** @class */ (function () {
    function AutocompletePage(viewCtrl, zone) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    AutocompletePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
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
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction.description);
                    });
                }
                else {
                    me.autocompleteItems.push("no results");
                }
            });
        });
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], AutocompletePage.prototype, "mapElement", void 0);
    AutocompletePage = __decorate([
        Component({
            templateUrl: 'autocomplete.html'
        }),
        __metadata("design:paramtypes", [ViewController, NgZone])
    ], AutocompletePage);
    return AutocompletePage;
}());
export { AutocompletePage };
//# sourceMappingURL=autocomplete.js.map