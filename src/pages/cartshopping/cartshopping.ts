import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-cartshopping',
  templateUrl: 'cartshopping.html',
})
export class CartshoppingPage {
sups:any
    quantity:any
  // remove:any
totalPrice:number
  constructor(private comman:CommonservicesProvider,public navCtrl: NavController, public navParams: NavParams,private common:CommonservicesProvider) {

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
ionViewWillEnter(){
    this.sups=[];
    this.quantity=[];
    this.totalPrice=0;
    let self=this;
    this.common.getStoredValue('cart').then(res=>{

        self.sups=res
      for(let i=0 ;i<res.length;i++){

          self.quantity.push(0)
      // self.totalPrice+=parseInt(res[i].price)
        }
        console.log(res.length)
        console.log( self.quantity)

    })
}
    delete(i){
    // if()
this.totalPrice=this.totalPrice-(this.quantity[i]*parseInt(this.sups[i].price))
        console.log(this.quantity[i]*parseInt(this.sups[i].price))
        console.log(this.quantity[i]*parseInt(this.sups[i].price))
        this.sups.splice(i)
this.comman.storeValue("cart",this.sups)
    }
  ionViewDidLoad() {

  }

}
