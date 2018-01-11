import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DoctordetailsPage } from '../doctordetails/doctordetails';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import {ClinkdetailsPage} from "../clinkdetails/clinkdetails";


@Component({
  selector: 'page-allclinks',
  templateUrl: 'allclinks.html',
})
export class AllclinksPage {
    veterinariansArray
    constructor(public veterinations:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillLoad(){
        this.veterinariansArray=[]
        this.veterinations.getAllServices(2).subscribe(veterinarians=>{
            this.veterinariansArray=veterinarians;
            console.log( this.veterinariansArray)

        })
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllclinksPage');
  }
  gotodetails(id){
    this.navCtrl.push(ClinkdetailsPage,id);
  }
}
