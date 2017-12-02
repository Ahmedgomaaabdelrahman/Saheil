import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SupsProvider} from "../../providers/sups/sups";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  constructor(public common:CommonservicesProvider,public sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
    member_id:any
favs:any
  ionViewWillEnter() {
      this.favs=[]
let self=this
    this.common.getStoredValue('user').then(user=>{
        console.log(user.member_id)
self.member_id=user.member_id
        self.sups.getUserFav(user.member_id).subscribe(res=>{
          console.log(res)
            self.favs=res
        })

    })
    console.log('ionViewDidLoad FavoritePage');
  }
    deleteToUserFav(itemToBeDeleted,index){
        let fav={
            "member_id":this.member_id,
            "supply_favorite_id":itemToBeDeleted
        }

        this.sups.deleteToUserFav(fav).subscribe(res=>{
            console.log(fav)
            console.log(res)
            // console.log(res.error)
            if(res['error']==null){
  this.favs.splice(index,1)
            this.common.presentToast('تمت الحذف من قائمة المفضلة')}
        })

   }
}
