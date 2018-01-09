import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {LandtransportationProvider} from "../../providers/landtransportation/landtransportation";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";

/**
 * Generated class for the TransportationTransporterHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transportation-transporter-history',
  templateUrl: 'transportation-transporter-history.html',
})
export class TransportationTransporterHistoryPage {
    _member_id
    _allHistoryOrders
    constructor(public transportationProvider:LandtransportationProvider,public common:CommonservicesProvider,public navCtrl: NavController, public navParams: NavParams) {
        this.common.getStoredValue('user').then(res=>{
            if(res!=null) {
                this._member_id = res.member_id
            }
        })
    }

    ionViewWillEnter() {
        this._allHistoryOrders=[]
        let member={'member_id':this._member_id}
        this.transportationProvider.transporterHistory(member).subscribe(res=>{
            console.log(res)
            res[0]=this._allHistoryOrders
        })
    }

}
