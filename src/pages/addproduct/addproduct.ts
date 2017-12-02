import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SupsProvider} from "../../providers/sups/sups";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})
export class AddproductPage {
    member_id
    title_ar
    title_en
    image
    details_ar
    details_en
    price
    category_id
sendimage
    allCategories
  constructor(private common:CommonservicesProvider,private sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
ionViewWillEnter(){
        this.allCategories=[]
        this.sups.getSupsCategoties().subscribe(response=>{
            console.log(response)
            this.allCategories=response
        })
    let self=this
this.common.getStoredValue('user').then(user=>{    self.member_id=user.member_id
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
      let addSup={
      "member_id":this.member_id,
      "title_ar":this.title_ar,
      "title_en" :this.title_en,
      "image" :this.sendimage,
      "details_ar" :this.details_ar,
      "details_en" :this.details_en,
      "price" :this.price,
      "category_id":this.category_id}
    console.log(addSup)

    this.sups.addSup(addSup).subscribe(response=>{
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
}
