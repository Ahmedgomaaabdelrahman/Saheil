import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VipProvider} from "../../providers/vip/vip";


@Component({
  selector: 'page-followaccounts',
  templateUrl: 'followaccounts.html',
})
export class FollowaccountsPage {

  constructor(public vip:VipProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
followups
    ionViewWillEnter() {
    this.followups=[]
    this.vip.getAllfollowup().subscribe(res=>{
      console.log(res)
        this.followups=res;

    })
    console.log('ionViewDidLoad FollowaccountsPage');
  }

}
