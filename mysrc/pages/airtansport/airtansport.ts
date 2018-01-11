import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DoctordetailsPage } from '../doctordetails/doctordetails';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import { AirtransdetailsPage } from '../airtransdetails/airtransdetails';


@Component({
  selector: 'page-airtansport',
  templateUrl: 'airtansport.html',
})
export class AirtansportPage {

    veterinariansArray
    constructor(public veterinations:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillLoad(){
        this.veterinariansArray=[]
        this.veterinations.getAllServices(3).subscribe(veterinarians=>{
            this.veterinariansArray=veterinarians;
            console.log("asasacasca"+ this.veterinariansArray)

        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AllclinksPage');
    }
    gotodetails(id){
        this.navCtrl.push(AirtransdetailsPage,id);
    }
}
