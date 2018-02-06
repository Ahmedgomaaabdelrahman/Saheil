import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {LandtransportationProvider} from "../../providers/landtransportation/landtransportation";
import { TransportionhisdetailsPage } from './../transportionhisdetails/transportionhisdetails';
import { TransportPage } from './../transport/transport';

/**
 * Generated class for the TransportationCustomerHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-transportation-customer-history',
  templateUrl: 'transportation-customer-history.html',
})
export class TransportationCustomerHistoryPage {
    _member_id
  _allHistoryOrders
  constructor(public transportationProvider:LandtransportationProvider,public common:CommonservicesProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

    ionViewWillLoad() {
      this._allHistoryOrders=[]
      let self=this
      // let member={'member_id':4}

////////////////////
        this.common.getStoredValue('user').then(res=>{
            if(res!=null) {
                self._member_id = res.member_id

            let member={'member_id':res.member_id}
            console.log('obj',member)
                self.transportationProvider.customerHistory(member).subscribe(data=>{
                self._allHistoryOrders=data
                console.log(data)
            })}
        })
        ///////////////////////

    }



    histdetails(order){
        this.navCtrl.push(TransportPage,order);
    }
}
