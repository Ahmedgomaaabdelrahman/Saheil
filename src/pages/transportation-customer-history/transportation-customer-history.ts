import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {LandtransportationProvider} from "../../providers/landtransportation/landtransportation";

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
      this.common.getStoredValue('user').then(res=>{
          if(res!=null) {
              this._member_id = res.member_id
          }
      })
  }

    ionViewWillLoad() {
      this._allHistoryOrders=[]
      let self=this
      let member={'member_id':4}
      // let member={'member_id':this._member_id}
this.transportationProvider.customerHistory(member).subscribe(
    (data)=>{
    data=self._allHistoryOrders

 console.log(data[0])
  console.log(data)
})
    }

}
