import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {SupsProvider} from "../../providers/sups/sups";


@Component({
  selector: 'page-cartshopping',
  templateUrl: 'cartshopping.html',
})
export class CartshoppingPage {
sups:any
    quantity:any
    adress
    mobile
    items
  // remove:any
totalPrice:number
  constructor(private cart:SupsProvider,private comman:CommonservicesProvider,public navCtrl: NavController, public navParams: NavParams,private common:CommonservicesProvider) {

  }
  add(i){

  this.quantity[i]+=1;
      this.totalPrice+=parseInt(this.sups[i].price)

      console.log(this.quantity[i])
  }
  remove(i){

      if(this.quantity[i] > 0 ){
  this.quantity[i]-=1;
          this.totalPrice-=parseInt(this.sups[i].price)

      }
  console.log(this.quantity[i])
  }
  member_id
ionViewWillEnter(){
    this.sups=[];
    this.quantity=[];
    this.totalPrice=0;
    let self=this;
    this.common.getStoredValue('user').then(user=>{
        self.member_id=user['member_id']
        self.cart.getMyCart(self.member_id).subscribe(res=>{
            self.sups=res
            for(let i=0 ;i< self.sups.length;i++){

                self.quantity.push(0)
                // self.totalPrice+=parseInt(res[i].price)
            }
            console.log( self.quantity)        })

    })
}
    delete(i){
    // if()
this.totalPrice=this.totalPrice-(this.quantity[i]*parseInt(this.sups[i].price))
        console.log(this.quantity[i]*parseInt(this.sups[i].price))
        console.log(this.quantity[i]*parseInt(this.sups[i].price))
        this.sups.splice(i,1)
// this.comman.storeValue("cart",this.sups)
    }
prepareToBuy():Promise<any>{
    let self=this

        let promise=new Promise((resolve,reject)=>{

            for(let i=0;i<this.quantity.length;i++){
                var item={
                    "supply_id":this.sups[i]['supply_id'],
                    "quantity":this.quantity[i]
                }
                this.items.push(item)
            }
            // self.items=[]
    // let l=0
    //         self.sups.forEach(function (s) {
        // console.log(s.index)

        // s['quantity']=self.quantity[l]
        // l++
    // })
resolve(self.items)
        })
    return promise
        }
 buy(){
this.items=[]

this.prepareToBuy().then(starttoBuy=>{

    console.log(starttoBuy)
    console.log(this.quantity)
    console.log(this.totalPrice)
    this.adress='ss'
    this.mobile='11'
    this.cart.buyslected(this.member_id,this.adress,this.mobile,starttoBuy).subscribe(res=>{
        console.log(res)
    })
})

 }

}
