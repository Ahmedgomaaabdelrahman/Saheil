import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NextevedetailsPage } from './../nextevedetails/nextevedetails';
import {UpcommingEventsProvider} from "../../providers/upcomming-events/upcomming-events";


@Component({
  selector: 'page-nextevents',
  templateUrl: 'nextevents.html',
})
export class NexteventsPage {

  constructor(public upcome:UpcommingEventsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }


  gotodetails(id){
    this.navCtrl.push(NextevedetailsPage,id);
  }
    upevents:any
    ionViewWillEnter() {
        this.upevents=[]
        this.upcome.allUpcommingEvents().subscribe(res=>{
            this.upevents=res;
            console.log('ress',res)
        })
    }
}
