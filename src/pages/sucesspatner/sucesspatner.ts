import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VipProvider} from "../../providers/vip/vip";


@Component({
  selector: 'page-sucesspatner',
  templateUrl: 'sucesspatner.html',
})
export class SucesspatnerPage {
    constructor(public vip:VipProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    sponsors
    ionViewWillEnter() {
        this.sponsors=[]
        this.vip.getAllsponsors().subscribe(res=>{
            console.log(res)
            this.sponsors=res;

        })
        console.log('ionViewDidLoad FollowaccountsPage');
    }

}
