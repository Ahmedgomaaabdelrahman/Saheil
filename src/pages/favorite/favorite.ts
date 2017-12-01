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

  ionViewWillEnter() {
let self=this
    this.common.getStoredValue('user').then(user=>{

        self.sups.getUserFav(user.member_id).subscribe(res=>{
          console.log(res)
        })

    })
    console.log('ionViewDidLoad FavoritePage');
  }

}
