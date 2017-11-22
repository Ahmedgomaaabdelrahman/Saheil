import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { DoctordetailsPage } from '../doctordetails/doctordetails';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";


@Component({
  selector: 'page-alldoctors',
  templateUrl: 'alldoctors.html',
})
export class AlldoctorsPage {
    veterinariansArray
  constructor(public veterinations:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
    ionViewWillLoad(){
        this.veterinariansArray=[]
        this.veterinations.getAllVeterinarians().subscribe(veterinarians=>{
            this.veterinariansArray=veterinarians;
            console.log( this.veterinariansArray)

        })
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlldoctorsPage');
  }
  gotodetails(id){
   this.navCtrl.push(DoctordetailsPage,id);
 }
}
