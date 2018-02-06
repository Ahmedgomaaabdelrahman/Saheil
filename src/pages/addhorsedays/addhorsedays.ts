import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DiariesProvider} from "../../providers/diaries/diaries";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {HomePage} from "../home/home";
import {HorsedaysPage} from "../horsedays/horsedays";
import {Resorces} from "../../modes/resorces";


@Component({
  selector: 'page-addhorsedays',
  templateUrl: 'addhorsedays.html',
})
export class AddhorsedaysPage {
    title_ar

    details_ar
    image
    video
    sendimage
  member_id
  constructor(public resources:Resorces,public common:CommonservicesProvider,public diaries:DiariesProvider,public navCtrl: NavController, public navParams: NavParams) {
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
            "video" :this.video,
            // "details_ar" :this.details_ar,
            // "details_en" :this.details_en,
            // "price" :this.price,
            // "category_id":this.category_id
            }
        // console.log(diaries)
this.common.presentLoadingDefault();
        this.diaries.addDiaries(diaries).subscribe(response=>{
          if(!response['error']){
              this.common.loadDismess()
            this.common.presentToast('تمت الاضافة بنجاح ')
            this.navCtrl.setRoot(HorsedaysPage)}
            else             {
              this.common.loadDismess()
              this.common.presentToast('لم تتم الاضافة')}

            console.log(response)

        })
    }
    show:boolean;
    serviceImage(){
        this.show=true
        this.common.presentActionSheet(this.resources.CAMERA_AR,this.resources.GALERY_AR).then(res=> {
            // console.log(res)
            this.serviceCam(res)
        })

    }
    serviceVideo(){
        this.show=false

        let self=this
        this.common.media().then(res=>{
            console.log('video',res[0]['fullPath'])
            // self.image= res[0]['fullPath']
            // this.common.fileUpload(self.image,'http://www.hefny.me/TestApi.php')
            this.common.toBase64(res[0]['fullPath']).then(base64=>{
                var str = base64;
                var res = str.split("data:image/*;charset=utf-8;base64,");
                this.video=res[1]

                    console.log(res[1])
            }).catch(e=>{
                console.log(e)
                this.common.presentToast('خطأ')
            })
        }).catch(e=>{
            console.log(e)
            this.common.presentToast('خطأ')
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
