import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EdithorsePage } from '../edithorse/edithorse';
import {EditproductPage} from "../editproduct/editproduct";
import {AddhorsePage} from "../addhorse/addhorse";
import {DealersProvider} from "../../providers/dealers/dealers";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-myhorses',
  templateUrl: 'myhorses.html',
})
export class MyhorsesPage {

    constructor(public common:CommonservicesProvider,public dealer:DealersProvider,public navCtrl: NavController, public navParams: NavParams) {
    }

    member_id:any
    mySups:any
    ionViewWillEnter() {
        this.mySups=[]
        let self=this
        this.common.getStoredValue('user').then(user=>{
            console.log(user.member_id)
            self.member_id=user.member_id
            self.dealer.manageHorse(user.member_id).subscribe(res=>{
                console.log(res)
                self.mySups=res
            })

        })
        // console.log('ionViewDidLoad FavoritePage');
    }
    addNew(){
        this.navCtrl.push(AddhorsePage)
    }
    deleteASup(itemId,index){

        let req={
            "member_id":this.member_id,
            "horse_id":itemId
        }
        this.dealer.deleteHorse(req).subscribe(res=>{
            console.log(res)
            this.mySups.splice(index,1)
        })
    }
    edit(itemId){
        console.log(itemId);

        this.navCtrl.push(EditproductPage,itemId);
    }
}
