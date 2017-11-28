import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SupsProvider} from "../../providers/sups/sups";



@Component({
    selector: 'page-horsesupp',
    templateUrl: 'horsesupp.html',
})
export class HorsesuppPage {
    supArray:any;
    constructor(public sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillEnter(){
        this.supArray=[]
        this.sups.getAllSupplies(this.navParams.data).subscribe(res=>{
            console.log(res)
            this.supArray=res[0].supplies;


        })
    }
// getDetails(id){
//     this.sups.getSupplyDetail(id)
// }
    ionViewDidLoad() {
        console.log('ionViewDidLoad HorsesuppPage');

    }

}