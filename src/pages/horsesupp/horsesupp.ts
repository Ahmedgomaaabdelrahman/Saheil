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
    constructor(public common:CommonservicesProvider,public sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillEnter(){
        this.supArray=[]
        this.sups.getAllSupplies(this.navParams.data).subscribe(res=>{
            console.log(res)
            this.supArray=res[0].supplies;


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
        this.common.getStoredValue('cart').then(cart=>{
            if(cart !=null){
            for(let i=0;i<cart.length;i++){
                self.supArrayy.push(cart[i])


            }
                self.supArrayy.push(sup)
                self.common.storeValue('cart',self.supArrayy);
            }else{
                self.supArrayy.push(sup)
                self.common.storeValue('cart',self.supArrayy);            }

        })
    }
}