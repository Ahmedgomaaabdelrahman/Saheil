import { Component } from '@angular/core';
import {IonicPage, Modal, ModalController, NavController, NavParams} from 'ionic-angular';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {SelectlocPage} from "../selectloc/selectloc";

/**
 * Generated class for the TransportMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transport-message',
  templateUrl: 'transport-message.html',
})
export class TransportMessagePage {
    _member_id
    _subject
    latlng
    origin
    origin_map
    destination
    destination_map
    _destination
    _origin
    _message
    flag:boolean

    constructor(public modalCtrl:ModalController,public common:CommonservicesProvider,public v:VeterinariansProvider,public navCtrl: NavController, public navParams: NavParams) {
        let self=this;
        this.flag=false
        this.common.getStoredValue('user').then(res=>{
            if(res!=null){


                this._member_id=res.member_id
                this.flag=true}else{this.flag=false
                // this._member_id=res['member_id']

            }
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SendrequestPage');

    }
    send(){
        let msg={
            'member_id':this._member_id,
            'member_service_id':this.navParams.data,
'origin':this.origin,
            'origin_map':this.origin_map,
            'destination':this.destination,
            'destination_map':this.destination_map
            // 'subject':this._subject,
            // 'message':this._message
        }
        this.v.sendOrder(msg).subscribe(res=>{
            console.log(res)
            if(res[0]['message_id']!=null){
                this.common.presentToast('تم الارسال')}else{
                this.common.presentToast('لم يتم الارسال')
            }
        })
    }
    selectLocoregin(){
        const townModal:Modal =this.modalCtrl.create(SelectlocPage);
        townModal.present();
        townModal.onDidDismiss(data=>{
            if(data !=null){
                this.latlng=data.lat+','+data.lng
                this.origin_map=data.lat+','+data.lng
                this.origin=data.adress
                console.log('loc from model :',  this.latlng,data.adress )
            }
            // console.log('loc from model :',data )

        })
        // this.navCtrl.push(SelectlocPage)
    }
    selectLocdestination(){
        const townModal:Modal =this.modalCtrl.create(SelectlocPage);
        townModal.present();
        townModal.onDidDismiss(data=>{
            if(data !=null){
                this.latlng=data.lat+','+data.lng
                this.destination_map=data.lat+','+data.lng
                this.destination=data.adress
                console.log('loc from model :',  this.latlng,data.adress )
            }
            // console.log('loc from model :',data )

        })
        // this.navCtrl.push(SelectlocPage)
    }
}
