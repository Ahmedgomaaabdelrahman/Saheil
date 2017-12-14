import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {DealersProvider} from "../../providers/dealers/dealers";
import {GetServicesProvider} from "../../providers/get-services/get-services";


@Component({
  selector: 'page-addhorse',
  templateUrl: 'addhorse.html',
})
export class AddhorsePage {

    member_id
    title_ar
    title_en
    image
    details_ar
    details_en
    price
    country_id
    category_id
    homeland
  color
  age
    sendimage
    allCategories
    constructor(public services:GetServicesProvider,private common:CommonservicesProvider,private dealer:DealersProvider,public navCtrl: NavController, public navParams: NavParams) {

    }
    cs
    ionViewWillEnter(){
        this.allCategories=[]
        this.dealer.gethorseCategoties().subscribe(response=>{
            console.log(response)
            this.allCategories=response
        })
        let self=this
        this.common.getStoredValue('user').then(user=>{    self.member_id=user.member_id
        })
        this.cs=[]
        this.services.countryid().then(res=>{
            this.cs=res;
            console.log(res)

        })
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad AddproductPage');
    }
    getSelectedCat(cat){
        console.log(cat);
        this.category_id=cat
    }
    submit(){
        let Horse={
            "member_id":this.member_id,
            "title_ar":this.title_ar,
            "title_en" :this.title_en,
            "image" :this.sendimage,
            "details_ar" :this.details_ar,
            "details_en" :this.details_en,
            "price" :this.price,
            "category_id":this.category_id,
            "color":this.color,
            "age":this.age,
            "homeland":this.homeland
        }
        console.log(Horse)

        this.dealer.addHorse(Horse).subscribe(response=>{
            console.log(response)
        })
    }
    serviceImage(){
        this.common.presentActionSheet('use cam','use galery').then(res=> {
            // console.log(res)
            this.serviceCam(res)
        })

    }
    serviceCam(source){
        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.service_image=res;
            this.image='data:image/jpeg;base64,' + res
            this.sendimage=res
        }).catch(e=>{
            console.log('cam error :', e)
        })
    }
    getSelectedC(c){
        console.log(c);

        this.country_id=c
    }
}
