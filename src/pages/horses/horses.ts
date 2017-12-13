import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {DealersProvider} from "../../providers/dealers/dealers";
import {HorsedetailsPage} from "../horsedetails/horsedetails";


@Component({
  selector: 'page-horses',
  templateUrl: 'horses.html',
})
export class HorsesPage {

    hourses: any;
    member_id

    constructor(public common: CommonservicesProvider, public dealer: DealersProvider, public navCtrl: NavController, public navParams: NavParams) {
    }
    more(horse){
        console.log(horse)
        this.navCtrl.push(HorsedetailsPage,horse.horse_id)
    }
    ionViewWillEnter() {

        this.hourses = []
        this.dealer.getDealerHoursesDetails(this.navParams.data).subscribe(res => {
            console.log(res)
            this.hourses = res[0].horses;

console.log(this.hourses)
        })
        this.common.getStoredValue('user').then(user => {
            this.member_id = user.member_id;
        })


    }

    addToFav(itemToBeAdded) {

        // let fav = {
        //     "member_id": this.member_id, "supply_id": itemToBeAdded
        // }
        //
        // this.dealer.addToUserFav(fav).subscribe(res => {
        //     console.log(res)
        //     this.common.presentToast('تمت الاضافة الي قائمة المفضلة')
        // })
    }

// getDetails(id){
//     this.sups.getSupplyDetail(id)
// }
    ionViewDidLoad() {
        console.log('ionViewDidLoad HorsesuppPage');

    }

addFav(fid){
    let fav={
        'member_id':this.member_id,
        'horse_id':fid
    }
    this.dealer.addToUserFav(fav).subscribe(res=>{
        console.log(res)
        if(!res['error']){
        this.common.presentToast('تمت الاضافة الي المفضلة')}
        else {
            this.common.presentToast('عفوا لم تنجح العملية')}

    }
    );
}
    supArrayy: any;
}
