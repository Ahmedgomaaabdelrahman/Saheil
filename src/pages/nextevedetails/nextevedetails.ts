import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UpcommingEventsProvider} from "../../providers/upcomming-events/upcomming-events";


@Component({
  selector: 'page-nextevedetails',
  templateUrl: 'nextevedetails.html',
})
export class NextevedetailsPage {
title
    details
    picpath
  constructor(public upcome:UpcommingEventsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
upevent

  ionViewWillEnter() {
  let self =this
    // this.upevents=[]
this.upcome.upcommingEventDetails(this.navParams.data).subscribe(res=>{
  // this.upevents=res;
    self.newsD=res[0]
    self.title=res[0].title_ar
    self.details=res[0].details
    self.picpath=res[0].picpath
  console.log('ress',res)
})
  }

}
