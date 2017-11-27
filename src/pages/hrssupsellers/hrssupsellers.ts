import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SellerdetailsPage } from '../sellerdetails/sellerdetails';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import {HorsesuppPage} from "../horsesupp/horsesupp";



@Component({
  selector: 'page-hrssupsellers',
  templateUrl: 'hrssupsellers.html',
})
export class HrssupsellersPage {

    veterinariansArray
    constructor(public veterinations:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillLoad(){
        this.veterinariansArray=[]
        this.veterinations.getAllServices(5).subscribe(veterinarians=>{
            this.veterinariansArray=veterinarians;
            console.log( this.veterinariansArray)

        })
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AlldoctorsPage');
    }
    gotodetails(id){
        this.navCtrl.push(HorsesuppPage,id);
    }
}
