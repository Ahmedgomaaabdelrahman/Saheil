import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VipProvider} from "../../providers/vip/vip";


@Component({
  selector: 'page-securityterms',
  templateUrl: 'securityterms.html',
})
export class SecuritytermsPage {

  constructor(public vip:VipProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
    details
    title
  ionViewWillEnter() {
this.vip.getsecurityterms().subscribe(res=>{
  console.log('   ',res)
this.details=res[0]['details']
this.title=res[0]['title']
})
  }

}
