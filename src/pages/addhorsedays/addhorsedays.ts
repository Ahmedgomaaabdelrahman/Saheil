import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DiariesProvider} from "../../providers/diaries/diaries";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-addhorsedays',
  templateUrl: 'addhorsedays.html',
})
export class AddhorsedaysPage {
    title_ar

    details_ar
    image
    sendimage
  member_id
  constructor(public common:CommonservicesProvider,public diaries:DiariesProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
      this.common.getStoredValue('user').then(user=>{    this.member_id=user.member_id

      })


  }
    submit(){
        let diaries={
            "member_id":this.member_id,
            "title_ar":this.title_ar,
            // "title_en" :this.title_en,
            "image" :this.sendimage,
            // "details_ar" :this.details_ar,
            // "details_en" :this.details_en,
            // "price" :this.price,
            // "category_id":this.category_id
            }
        console.log(diaries)

        this.diaries.addDiaries(diaries).subscribe(response=>{
          if(!response['error']){
            this.common.presentToast('تمت الاضافة بنجاح ')
            this.navCtrl.setRoot(HomePage)}
            else             {
                this.common.presentToast('لم تتم الاضافة')}

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
