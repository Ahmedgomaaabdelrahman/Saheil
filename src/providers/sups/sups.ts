import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {DomainProvider} from "../domain/domain";
import {PaypalProvider} from "../paypal/paypal";

/*
  Generated class for the SupsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SupsProvider {
    lang: any

    constructor(public url: DomainProvider, public http: HttpClient ,private paypal:PaypalProvider) {
        console.log('Hello VeterinariansProvider Provider');
        this.lang = url.lang;
    }

    getAllSupplies(id) {
        return this.http.get(this.url.url + 'api/' + this.lang + '/members/services/details/' + id);
    }

    getSupplyDetail(id) {

        return this.http.get(this.url.url + '/api/' + this.lang + '/supply/' + id);
    }
deleteSup(req){
    return this.http.post(this.url.url+"/api/supplies/delete",req)

}
    addSup(item) {

        return this.http.post(this.url.url + 'api/supplies/add/',item);
    } editSup(item) {
        return this.http.post(this.url.url + 'api/supplies/edit',item);
    }
    getSupsCategoties(){
            return this.http.get(this.url.url + 'api/' + this.lang + '/supplies/category');

    }
    getUserFav(memberId){
let fav={
    "member_id":memberId
}
        return this.http.post(this.url.url+"api/supplies/favorite",fav)
    }
    addToUserFav(req){

        return this.http.post(this.url.url+"api/supplies/favorite/add",req)
    }
    deleteToUserFav(req){
        // http://www.sahel-horse.com/api/supplies/favorite/delete
        return this.http.post(this.url.url+"api/supplies/favorite/delete",req)
    }
    getMySuplies(req){
        let my={
            "member_id":req
        }

        // http://www.sahel-horse.com/api/supplies/manage
                    return this.http.post(this.url.url+"api/supplies/manage",my)
    }
    addToCart(member_id,supply_id){
        //ضافة الي السرفر
        // http://www.sahel-horse.com/api/supplies/cart/add
        let my={
            "member_id":member_id,
            "supply_id":supply_id,
            "quantity":0
        }


                    return this.http.post(this.url.url+"api/supplies/cart/add",my)
    }
    deleteFromCart(order_id){
        //المسح مالسرفر قبل الشراء
        //http://www.sahel-horse.com/api/supplies/cart/delete
        let my={
            "order_id":order_id
        }

        return this.http.post(this.url.url+"api/supplies/cart/delete",my)
    }
    getMyCart(member_id){
        //عرض ماتمت اضافته الي السلة
        //http://www.sahel-horse.com/api/ar/supplies/mycart
        let my={
            "member_id":member_id
        }

        return this.http.post(this.url.url+"api/"+this.lang+"/supplies/mycart",my)
    }
    quantityEdit(order_id,quantity){
        //عرض ماتمت اضافته الي السلة
        //http://www.sahel-horse.com/api/supplies/cart/edit
        let my={
            "order_id":order_id,
            "quantity":quantity
        }

        return this.http.post(this.url.url+"api/supplies/cart/edit",my)
    }
    buyslected(member_id,adress,mobile,items,price){
        //عملية الشراء بعد التحكم فالكميات
        //http://www.sahel-horse.com/api/supplies/cart
//http://www.sahel-horse.com/api/supplies/cart/checkout
        let my={
            "member_id":member_id,
            "shipping":adress,
            "mobile":mobile,
            // "items":items
        }
        console.log(my)

        // return this.http.post(this.url.url+"api/supplies/cart",my)
        // this.paypal.pay(price)
        return this.http.post(this.url.url+"api/supplies/cart/checkout",my)
    }

    //عرض ماتمت اضافته الي السلة
    //http://www.sahel-horse.com/api/ar/supplies/mycart
    //عملية الشراء بعد التحكم فالكميات
    //http://www.sahel-horse.com/api/supplies/cart
    //http://www.sahel-horse.com/api/supplies/cart/checkout
}