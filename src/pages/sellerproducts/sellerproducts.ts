import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditproductPage } from '../editproduct/editproduct';
import {SupsProvider} from "../../providers/sups/sups";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {AddproductPage} from "../addproduct/addproduct";

@Component({
  selector: 'page-sellerproducts',
  templateUrl: 'sellerproducts.html',
})
export class SellerproductsPage {

  constructor(public common:CommonservicesProvider,public sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

    member_id:any
    mySups:any
    ionViewWillEnter() {
        this.mySups=[]
        let self=this
        this.common.getStoredValue('user').then(user=>{
            console.log(user.member_id)
            self.member_id=user.member_id
            self.sups.getMySuplies(user.member_id).subscribe(res=>{
                console.log(res)
                self.mySups=res
            })

        })
        console.log('ionViewDidLoad FavoritePage');
    }
    addNew(){
      this.navCtrl.push(AddproductPage)
    }
    deleteASup(itemId,index){

      let req={
          "member_id":this.member_id,
          "supply_id":itemId
      }
      this.sups.deleteSup(req).subscribe(res=>{
this.mySups.splice(index,1)
      })
    }
  edit(itemId){
      console.log(itemId);

      this.navCtrl.push(EditproductPage,itemId);
  }
}
