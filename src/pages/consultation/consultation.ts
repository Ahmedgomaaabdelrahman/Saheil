import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsuldetailsPage } from '../consuldetails/consuldetails';
import {MailProvider} from "../../providers/mail/mail";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";



@Component({
    selector: 'page-consultation',
    templateUrl: 'consultation.html',
})
export class ConsultationPage {

    constructor(private common:CommonservicesProvider,private mail:MailProvider,public navCtrl: NavController, public navParams: NavParams) {
    }
    ionViewWillEnter(){
        this.common.getStoredValue('user').then(res=>{
            this.mail.getMyInbox(res.member_id).subscribe(res=>{
                console.log(res)
            })
        })

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ConsultationسPage');
    }
    gotodetails(){
        this.navCtrl.push(ConsuldetailsPage);
    }
}