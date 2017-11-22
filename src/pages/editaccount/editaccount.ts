import { Component } from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams} from 'ionic-angular';
import {AuthproviderProvider} from "../../providers/authprovider/authprovider";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {SelectlocPage} from "../selectloc/selectloc";
import {DomainProvider} from "../../providers/domain/domain";

@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class EditaccountPage {
    D=this.domain.url
member_id
    image:any;
  username:string
  mobile:number;
email:string;
password:string
    gcm_regid:string;
service_name_en:string;
service_name_ar:string;
service_image:any;
service_adress_ar:string
service_adress_en:string
    map:any;
service_details_ar:string
service_details_en:string
    facebook:any;
    twitter:any;
  constructor(public domain:DomainProvider,public modalCtrl:ModalController,public common:CommonservicesProvider,private auth:AuthproviderProvider,public navCtrl: NavController, public navParams: NavParams) {
  this.common.getStoredValue('user').then(user=>{
      console.log(user.member_id)
      console.log(user)
      this.member_id=user.member_id
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaccountPage');

  }
submit(){
  let  user={
      'image':this.image,//use cam
      'member_id':this.member_id,// storage
        'username':this.username,
        'email':this.email,
      'map':this.latlng,
        'password':this.password,
        'gcm_regid':this.gcm_regid,//cordova fcm
      'service_name_ar':this.service_name_ar,
      'service_name_en':this.service_name_en,
      'service_image':this.service_image,//use cam
      'service_adress_ar':this.service_adress_ar,
      'service_adress_en':this.service_adress_en,
      'service_details_ar':this.service_details_ar,
      'service_details_en':this.service_details_en,
      'facebook':this.facebook,
      'twitter':this.twitter
    };
    this.auth.updateInfo(user).subscribe(res=>{

    })
}
    profileImage(){
        this.common.presentActionSheet('use cam',this.profileCam(0),'use galery',this.profileCam(1))

    }

    serviceImage(){
        this.common.presentActionSheet('use cam',this.serviceCam(0),'use galery',this.serviceCam(1))

    }
    serviceCam(source){
        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.service_image=res;
            this.service_image('data:image/jpeg;base64,' + res)
        }).catch(e=>{
            console.log('cam error :', e)
        })
    }
    profileCam(source){
        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.image=res;
            this.image='data:image/jpeg;base64,' + res
        }).catch(e=>{
            console.log('cam error :', e)
        })
    }
    latlng
    selectLoc(){
        const townModal:Modal =this.modalCtrl.create(SelectlocPage);
        townModal.present();
        townModal.onDidDismiss(data=>{
            if(data !=null){
                this.latlng=data.lat+','+data.lng
            console.log('loc from model :',  this.latlng )
            }
            // console.log('loc from model :',data )

        })
        // this.navCtrl.push(SelectlocPage)
    }
}
