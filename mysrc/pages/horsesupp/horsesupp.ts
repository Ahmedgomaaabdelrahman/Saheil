import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SupsProvider} from "../../providers/sups/sups";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";



@Component({
    selector: 'page-horsesupp',
    templateUrl: 'horsesupp.html',
}) 
export class HorsesuppPage {

    supArray:any;
    member_id
    constructor(public common:CommonservicesProvider,public sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillEnter(){

        this.supArray=[]
        this.sups.getAllSupplies(this.navParams.data).subscribe(res=>{
            console.log(res)
            this.supArray=res[0].supplies;


        })
        this.common.getStoredValue('user').then(user=>{
            this.member_id=user.member_id;
        })


    }
    addToFav(itemToBeAdded){

        let fav={
            "member_id":this.member_id,"supply_id":itemToBeAdded
        }

        this.sups.addToUserFav(fav).subscribe(res=>{
            console.log(res)
            this.common.presentToast('تمت الاضافة الي قائمة المفضلة')
        })
    }

// getDetails(id){
//     this.sups.getSupplyDetail(id)
// }
    ionViewDidLoad() {
        console.log('ionViewDidLoad HorsesuppPage');

    }
    supArrayy:any;
    addToBasket(sup){
this.supArrayy=[]
        let self=this

        console.log('add to cart :',sup)

        this.sups.addToCart(this.member_id,sup['supply_id']).subscribe(res=>{
    console.log('add to cart :',res)
    if(res['error']!=null){}
    else{
    this.common.presentToast('تمت الاضافة الي السلة')}
})
        // this.common.getStoredValue('cart').then(cart=>{
        //     if(cart !=null){
        //     for(let i=0;i<cart.length;i++){
        //         self.supArrayy.push(cart[i])
        //
        //
        //     }
        //         self.supArrayy.push(sup)
        //         self.common.storeValue('cart',self.supArrayy);
        //     }else{
        //         self.supArrayy.push(sup)
        //         self.common.storeValue('cart',self.supArrayy);            }
        //
        // })
    }
}