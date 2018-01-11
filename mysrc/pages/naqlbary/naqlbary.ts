import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NaqldetailsPage } from './../naqldetails/naqldetails';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";


@Component({
  selector: 'page-naqlbary',
  templateUrl: 'naqlbary.html',
})
export class NaqlbaryPage {
    veterinariansArray
    constructor(public veterinations:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillLoad(){
        this.veterinariansArray=[]
        this.veterinations.getAllServices(4).subscribe(veterinarians=>{
            this.veterinariansArray=veterinarians;
            console.log( this.veterinariansArray)

        })
    }

  gotodetails(id){
    this.navCtrl.push(NaqldetailsPage,id);
  }
}
