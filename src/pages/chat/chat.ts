import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
    msgs
    service_image
    service_sendimage
    member_id
  constructor(private common:CommonservicesProvider,private chat:ChatProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
index
  ionViewWillEnter() {
        this.index=0;
  this.common.getStoredValue('user').then(res=>{
    this.member_id=res.member_id
      console.log(this.member_id)
this.getAllMessages(0)
  })

  }
getAllMessages(i?){
    this.msgs=[]
    console.log('ionViewDidLoad ChatPage');
    if(i==null){
    this.chat.getPublicChat(this.index).subscribe(res=>{
    if(res !=null) {
        this.index += 1
        for (let l = 0; l < 10; l++) {
            if (res[l] != null) {
                this.msgs.push(res[l])
            }


        }
    }
    });
    }else{
        this.chat.getPublicChat(i).subscribe(res=>{
            for (let l = 0; l <10; l++) {
                if(res[l]!=null){
                    this.msgs.push(res[l])}


            }
        });
    }
}
    sendImage(){
        this.common.presentActionSheet('cam',' galery').then(res=> {
            console.log(res)
            this.serviceCam(res)
        })

    }
    messageBody
    sendMessage(){

      this.chat.sendPublicChat(this.member_id,null,this.messageBody,'no').subscribe(res=>{

        console.log(res)
      this.getAllMessages(0)
      })
    }
    serviceCam(source){
        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.service_image=res;
            this.service_image='data:image/jpeg;base64,' + res
            this.service_sendimage= res
            this.common.presentLoadingDefault()
            this.chat.sendPublicChat(this.member_id,null,'image',this.service_sendimage).subscribe(res=>{
                this.getAllMessages(0)
                this.common.loadDismess()

            })

        }).catch(e=>{
            console.log('cam error :', e)
        })
    }

 doInfinite(infiniteScroll) {
        console.log('Begin async operation');

        // setTimeout(() => {
                // this.items.push( this.items.length );
                this.chat.getPublicChat(0).subscribe(res=> {
                    // console.log(res['diaries'])
                    this.msgs=[]
                    for (let i = 0; i <10; i++) {
                        if(res[i]!=null){
                        this.msgs.push(res[i])}


                    }
this.index=1
                    })

            // this.diaries.getAllDiaries(this.items.length-1).subscribe(res=> {
            //     console.log(res['diaries'])
            //     this.items=res['diaries']
            // })
            console.log('Async operation has ended');

    infiniteScroll.complete();
    }
    more(){
        this.getAllMessages()
    }
}
