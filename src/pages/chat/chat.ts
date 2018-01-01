import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatProvider} from "../../providers/chat/chat";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import { Content } from 'ionic-angular';
import {ImagechatPage} from "../imagechat/imagechat";


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
    @ViewChild(Content) content:any;

    msgs
    service_image
    service_sendimage
    member_id
    mode=this.navParams.data
    index
    reciver
  constructor(private common:CommonservicesProvider,private chat:ChatProvider,public navCtrl: NavController, public navParams: NavParams) {
      this.index=1;

        if(this.navParams.data['mode']!=0){
    console.log(this.navParams.data)
this.reciver=this.navParams.data['id']
}
      // this.scrollDown()
  }
    ngOnChanges(){
        this.scrollDown()
    }

    scrollDown(){
        let self =this
        setTimeout(() => {
            self.content.scrollToBottom();
        }, 1000);
    }
  ionViewDidLoad() {
  this.common.getStoredValue('user').then(res=>{
    this.member_id=res.member_id
      console.log(this.member_id)
this.getAllMessages(0)
  })

  }
getAllMessages(i?){
        if(this.navParams.data['mode'] == 0){
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
        // this.scrollDown()

    }

    });
    }else{

        this.chat.getPublicChat(i).subscribe(res=>{
        this.msgs=[]
            for (let l = 0; l <10; l++) {
                if(res[l]!=null){
                    this.msgs.push(res[l])}


            }
            this.scrollDown()

        });
    }
        }else{
            if(i==null){
                this.chat.getMyPraivateConversations(this.member_id,this.navParams.data['id'],this.index).subscribe(res=>{
                    if(res !=null) {
                        this.index += 1
                        for (let l = 0; l < 10; l++) {
                            if (res[l] != null) {
                                this.msgs.push(res[l])
                            }


                        }
                    }
                    this.scrollDown()

                });
            }else {
                this.chat.getMyPraivateConversations(this.member_id, this.navParams.data['id'], i).subscribe(res => {
                    this.msgs = []

                    for (let l = 0; l < 10; l++) {
                        if (res[l] != null) {
                            this.msgs.push(res[l])
                        }
                    }
                    this.scrollDown()

                });

            }
        }
}
    sendImage(){
        this.common.presentActionSheet('cam',' galery').then(res=> {
            console.log(res)
            this.serviceCam(res)
            this.scrollDown()

        })

    }
    messageBody
    sendmessageBody
    sendMessage(){
        this.sendmessageBody=this.messageBody
        this.messageBody=''
        if(this.navParams.data['mode']==0){

      this.chat.sendPublicChat(this.member_id,null,this.sendmessageBody,'no').subscribe(res=>{

        console.log(res)
      this.getAllMessages(1)

          this.index=1
      });
        }else{
            console.log(this.member_id,this.navParams.data['id'],this.messageBody,)

            this.chat.sendPrivateChat(this.member_id,this.navParams.data['id'],this.sendmessageBody,null).subscribe(res=>{

                console.log(res)
                this.getAllMessages(1)
                this.index=1            })
        }

    }
    serviceCam(source){
        this.common.camPic(source).then(res=>{
            // console.log('img',res)
            // this.service_image=res;
            this.service_image='data:image/jpeg;base64,' + res
            this.service_sendimage= res
            this.common.presentLoadingDefault()
            if(this.navParams.data['mode']==0){
            this.chat.sendPublicChat(this.member_id,null,null,this.service_sendimage).subscribe(res=>{
                console.log(res)
                this.getAllMessages(1)
                this.index=1

                this.common.loadDismess()

            })}else{



                this.chat.sendPrivateChat(this.member_id,this.navParams.data['id'],null,this.service_sendimage).subscribe(res=>{
                    this.getAllMessages(1)
                    this.index=1

                    this.common.loadDismess()

                })



            }

        }).catch(e=>{
            console.log('cam error :', e)
        })
    }

 doInfinite(infiniteScroll) {
        console.log('Begin async operation');
if(this.navParams.data['mode']==0) {
    this.chat.getPublicChat(1).subscribe(res => {
        this.msgs = []
        for (let i = 0; i < 10; i++) {
            if (res[i] != null) {
                this.msgs.push(res[i])
            }
        }
        this.index = 1
    });
}else {

    this.chat.getMyPraivateConversations(this.member_id,this.navParams.data['id'],this.index).subscribe(res => {
        this.msgs = []
        for (let i = 0; i < 10; i++) {
            if (res[i] != null) {
                this.msgs.push(res[i])
            }
        }
        this.index = 1
    });
}
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
    goPrivate(id){
        console.log(id)
        this.navCtrl.push(ChatPage,{'mode':1,'id':id})
    }
    maxmizeImage(img){
     this.navCtrl.push(ImagechatPage,img)
    }
}
