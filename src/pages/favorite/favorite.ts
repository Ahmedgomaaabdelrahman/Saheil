import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SupsProvider} from "../../providers/sups/sups";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {ProductdetailsPage} from "../productdetails/productdetails";
import {DealersProvider} from "../../providers/dealers/dealers";
import {HorsedetailsPage} from "../horsedetails/horsedetails";


@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  constructor(public dealer:DealersProvider,public common:CommonservicesProvider,public sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  mode:any
    member_id:any
favs:any
 startViewingSupsFavs(){
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
 }
    startViewingHorsesFavs(){
        this.favs=[]
        let self=this
        this.common.getStoredValue('user').then(user=>{
            console.log(user.member_id)
            self.member_id=user.member_id
            self.dealer.getHorsesfavorite(user.member_id).subscribe(res=>{
                console.log(res)
                self.favs=res
            })

        })
    }
  ionViewWillEnter() {
      this.mode=this.navParams.data

      if(this.mode==1){
this.startViewingHorsesFavs()
      }else{
          this.startViewingSupsFavs()
      }

    console.log('ionViewDidLoad FavoritePage');
  }
  gotodetails(id){
     this.navCtrl.push(HorsedetailsPage,id)
  }
    deleteToUserFav(itemToBeDeleted,index){
        let fav={
            "member_id":this.member_id,
            "supply_favorite_id":itemToBeDeleted
        }

        this.sups.deleteToUserFav(fav).subscribe(res=>{
            console.log(fav)
            console.log(res)
            if(res['error']==null){
  this.favs.splice(index,1)
            this.common.presentToast('تمت الحذف من قائمة المفضلة')}
        })

   }
    deleteHorseUserFav(itemToBeDeleted,index){


        this.dealer.favoritedelete(this.member_id,itemToBeDeleted).subscribe(res=>{
            // console.log(fav)
            console.log(res)
            if(res['error']==null){
                this.favs.splice(index,1)
                this.common.presentToast('تمت الحذف من قائمة المفضلة')}
        })

    }
}
