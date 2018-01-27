import { Component } from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams} from 'ionic-angular';
import {AuthproviderProvider} from "../../providers/authprovider/authprovider";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {SelectlocPage} from "../selectloc/selectloc";
import {DomainProvider} from "../../providers/domain/domain";
import {HomePage} from "../home/home";
import {Resorces} from "../../modes/resorces";
import {GetServicesProvider} from "../../providers/get-services/get-services";

@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class EditaccountPage {
    D=this.domain.url;
member_id;
normalUserFlag:boolean;
    image:any;
    sendimage:any;
  username:string;
  mobile:number;
email:string;
password:string;
    gcm_regid:string;
service_name_en:string;
service_name_ar:string;
service_image:any;
service_sendimage:any;
service_adress_ar:string;
service_adress_en:string;
  service_id:string;
    map:any;
    qPrice:any;
commetion:any;
service_details_ar:string;
service_details_en:string;
    facebook:any;
    twitter:any;
  constructor(public services:GetServicesProvider,public resources:Resorces,public domain:DomainProvider,public modalCtrl:ModalController,public common:CommonservicesProvider,private auth:AuthproviderProvider,public navCtrl: NavController, public navParams: NavParams) {
  let self=this
    this.common.getStoredValue('user').then(user=>{
      console.log('edit user',user)
      try {
          // console.log(user.member_id);
          // console.log(user);
        self.member_id = user.member_id;
//////////////
        self.qPrice=user.price;
        self.image = user.image;
        self.username = user.username;
        self.email = user.email;
        self.mobile = user.mobile;
        self.latlng = user.latlng;
        self.password = user.password;
        self.gcm_regid=user.gcm_regid;
        self.service_id = user.service[0].service_id;
        self.service_name_ar = user.service_name_ar;
        self.service_name_en = user.service_name_en;
        self.service_image = user.service_image;
        self.service_adress_ar = user.service_adress_ar;
        self.service_adress_en = user.service_adress_en;
        self.service_details_ar = user.service_details_ar;
        self.service_details_en = user.service_details_en;
        self.facebook = user.facebook;
        self.twitter = user.twitter;
///////////////
        console.log('lenth :`{{}}` ',user.image,)
        document.getElementById("profileImage").style.backgroundImage="url("+this.image+")";

//         let i=1
        this.services.serviceDetails().subscribe(res=>{
          console.log('lenth : ',res)
          console.log('lenth : ',res.length)

          for (let i=1;i<res.length;i++){
            if(this.service_id==res[i].service_id){
              this.commetion=res[i].commision
              console.log(res[i])
            }
          }

        })

        console.log(this.service_id)

      }catch (e){
          console.log(e)
      }
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaccountPage');
  }
submit(){
  var  user={
      'image':this.sendimage,//use cam
      'member_id':this.member_id,// storage
      'username':this.username,
      'email':this.email,
      'mobile':this.mobile,
      'map':this.latlng,
      'password':this.password,
      // 'gcm_regid':this.gcm_regid,//cordova fcm
      'gcm_regid':'123456',//cordova fcm
      'service_name_ar':this.service_name_ar,
      'service_name_en':this.service_name_en,
      'service_image':this.service_sendimage,//use cam
      'service_adress_ar':this.service_adress_ar,
      'service_adress_en':this.service_adress_en,
      'service_details_ar':this.service_details_ar,
      'service_details_en':this.service_details_en,
      'facebook':this.facebook,
      'twitter':this.twitter,
      'price':this.qPrice
    };
    console.log('u',user)

  let self=this;
this.common.presentLoadingDefault();
    this.auth.updateInfo(user).subscribe(res=> {
        if (res['error'] != null) {
            this.common.loadDismess()
            this.common.presentToast(res['error'])
            console.log(res);
        } else {

// console.log('res',res)
        this.common.presentToast('تم التعديل')
        this.common.loadDismess();
        self.common.getStoredValue('xuser').then(u => {
            self.common.storeValue('user', user)
            this.navCtrl.setRoot(HomePage)
            if (u != null) {
                self.common.storeValue('xuser', u)
            }
        })
    }
    })
}
    profileImage(){
        this.common.presentActionSheet(this.resources.CAMERA_AR,this.resources.GALERY_AR).then(res=> {
            console.log(res)

            this.profileCam(res)
        })
    }

    serviceImage(){
        this.common.presentActionSheet(this.resources.CAMERA_AR,this.resources.GALERY_AR).then(res=> {
            console.log(res)
            this.serviceCam(res)
        })

    }
    serviceCam(source){
        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.service_image=res;
            this.service_image='data:image/jpeg;base64,' + res
            this.service_sendimage= res
        }).catch(e=>{
            console.log('cam error :', e)
        })
    }
    profileCam(source){
        this.image=''
        this.sendimage=''

        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.image=res;
            this.image='data:image/jpeg;base64,' + res
            this.sendimage=res
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
