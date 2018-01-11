import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HorsesPage } from '../horses/horses';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";


@Component({
  selector: 'page-horseseller',
  templateUrl: 'horseseller.html',
})
export class HorsesellerPage {
    veterinariansArray

    constructor(public veterinations:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewWillEnter(){
        this.veterinariansArray=[]
        this.veterinations.getAllServices(6).subscribe(veterinarians=>{
            this.veterinariansArray=veterinarians;
            console.log( this.veterinariansArray)

        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AllclinksPage');
    }

    gotodetails(id){
  this.navCtrl.push(HorsesPage,id);
}
}
