import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {SupsProvider} from "../../providers/sups/sups";


@Component({
  selector: 'page-editproduct',
  templateUrl: 'editproduct.html',
})
export class EditproductPage {
    supply_id
    member_id
    title_ar
    title_en
    image
    details_ar
    details_en
    price
    category_id

    allCategories
    constructor(private common:CommonservicesProvider,private sups:SupsProvider,public navCtrl: NavController, public navParams: NavParams) {

    }
    ionViewWillEnter(){
      this.supply_id=this.navParams.data
        console.log(this.supply_id)
        // this.sups.getSupplyDetail(this.supply_id).subscribe(res=>{
        //     console.log(res)
        //
        //   this. title_ar=res.title_ar
        //     this. title_en=res.title_en
        //     this. image=res.image
        //     this. details_ar=res.details_ar
        //     this.  details_en=res.details_en
        //     this.  price=res.price
        //     this.  category_id=res.category_id
        //
        // })

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
          "supply_id":this.supply_id,
            "member_id":this.member_id,
            "title_ar":this.title_ar,
            "title_en" :this.title_en,
            "image" :this.image,
            "details_ar" :this.details_ar,
            "details_en" :this.details_en,
            "price" :this.price,
            "category_id":this.category_id}
        console.log(addSup)

        this.sups.editSup(addSup).subscribe(response=>{
            console.log(response)
            this.common.presentToast('تم التعديل بنجاح')
        })
    }
    serviceImage(){
        this.common.presentActionSheet('use cam','use galery').then(res=> {
            console.log(res)
            this.serviceCam(res)
        })

    }
    serviceCam(source){
        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.service_image=res;
            this.image='data:image/jpeg;base64,' + res
        }).catch(e=>{
            console.log('cam error :', e)
        })
    }
}
