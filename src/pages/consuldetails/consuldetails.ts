import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {MailProvider} from "../../providers/mail/mail";



@Component({
  selector: 'page-consuldetails',
  templateUrl: 'consuldetails.html',
})
export class ConsuldetailsPage {
msg:any
  constructor(public common:CommonservicesProvider,public navCtrl: NavController, public navParams: NavParams,private mail:MailProvider) {
  }
  subject:any;
message:any
ionViewWillEnter(){
    this.msg=[];

    console.log(this.navParams.data)
    let self=this;
    self.common.getStoredValue('user').then(user=>{
    console.log(user.member_id)

        self.mail.getMsgDetails(self.navParams.data,user.member_id).subscribe(res=>{
        console.log(res[0])
       self.message=res[0].message
        self.subject=res[0].subject;

    })
})

}
  ionViewDidLoad() {
    // this.mail.
    console.log('ionViewDidLoad ConsuldetailsPage');
  }

}
