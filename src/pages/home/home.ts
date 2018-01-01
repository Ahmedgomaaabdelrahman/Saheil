import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import { AlldoctorsPage } from '../alldoctors/alldoctors';
import { AllclinksPage } from '../allclinks/allclinks';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import { TransportPage } from '../transport/transport';
import {AirtansportPage} from "../airtansport/airtansport";
import {HorsesuppPage} from "../horsesupp/horsesupp";
import {HrssupsellersPage} from "../hrssupsellers/hrssupsellers";
import {HorsesellerPage} from "../horseseller/horseseller";
import {LivestreamPage} from "../livestream/livestream";
import { TourtablesPage } from '../tourtables/tourtables';
import {NaqlbaryPage} from "../naqlbary/naqlbary";
import { AddhorsedaysPage } from '../addhorsedays/addhorsedays';
import {DiariesProvider} from "../../providers/diaries/diaries";
import { HorsedaysPage } from '../horsedays/horsedays';
import { ChatPage } from '../chat/chat';
import {LoginPage} from "../login/login";
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import {AlbumProvider} from "../../providers/album/album";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    index:any;
timer:any
slideImages:any;
startTimer:any
    items:any;
    show:any;
    member_id
    constructor(private album:AlbumProvider,private streamingMedia: StreamingMedia,public diaries:DiariesProvider,public menuCtrl:MenuController,public common:CommonservicesProvider,public navCtrl: NavController) {
        // fullscreen video
        //https://ionicframework.com/docs/native/streaming-media/
        // let options: StreamingVideoOptions = {
        //
        //     successCallback: () => { console.log('Video played') },
        //     errorCallback: (e) => { console.log('Error streaming') },
        //     // shouldAutoClose:'true',  // true(default)/false
        //     // controls:'false' // true(default)/false. Used to hide controls on fullscreen
        //             };
        //
        // this.streamingMedia.playVideo('http://www.sahel-horse.com/uploads/videos/5a4921ad2f46f.3gp', options);
        // this.menuCtrl.enable(true)

        this.common.getStoredValue('user').then(user=>{
            console.log('user : ',user);
            if(user !=null){
                this.member_id=user['member_id']
            }
        })

    }
    ionViewWillEnter(){
        this.page=1
        this.menuCtrl.enable(true)
        this.items=[]
        this.show=[]
        this.slideImages=[]
        let self=this
this.album.homeSlider().subscribe(res=>{
    console.log(res)
    this.slideImages=res;
})
        this.diaries.getAllDiaries(this.page).subscribe(res=> {

            this.items=res['diaries']
             self.show=[]
            let i=0
                self.startTimer=   setInterval(function () {
                    self.show={
                        'picpath':res['diaries'][i]['picpath'],
                        'username':res['diaries'][i]['member'][0]['username'],'created':res['diaries'][i]['created']
                    }

                    if(i!=self.items.length-1){
i++}else{
                        i=0
                    }
                },3000);

        })
    }
    less(){
console.log(this.page)
        if(this.page>=0){
            clearInterval(this.timer);
            clearInterval(this.startTimer);
        this.page-=1

        let self=this
        // clearInterval()
        console.log(this.items[this.items.length-1]['diary_id'])
        console.log(this.items.length-1)
        this.diaries.getAllDiariesasc(this.page).subscribe(res=> {
            this.index=0
            this.items=[]
            console.log('new items :',res['diaries'].length)

            this.items=res['diaries']
            self.show=[]
            let i=0
            self.startTimer=   setInterval(function () {
                self.show={
                    'picpath':res['diaries'][i]['picpath'],
                    'username':res['diaries'][i]['member'][0]['username'],'created':res['diaries'][i]['created']
                }
                if(i!=self.items.length-1){
                    i++}else{
                    i=0
                }
            },3000);
            }
        )
    }
    }
page
    more(){

this.page+=1
        console.log('num of page :',this.page)

        let self=this
        this.diaries.getAllDiaries(this.page).subscribe(res=> {

if(res['diaries'].length !=0){
    clearInterval(this.timer);
    clearInterval(this.startTimer);
    this.index=0
    this.items=[]
            this.items=res['diaries']
            self.show=[]
            let i=0
            self.startTimer=   setInterval(function () {
                self.show={
                    'picpath':res['diaries'][i]['picpath'],
                    'username':res['diaries'][i]['member'][0]['username'],'created':res['diaries'][i]['created']
                }

                if(i!=self.items.length-1){
                    i++}else{
                    i=0
                }
            },3000);
            }else {this.page-=1
this.common.presentToast('انتهت اليوميات')
}
            }
        )
    }
    clickShow(item){
        clearInterval(this.timer);

        console.log(item)
        this.show=[]
        this.show={
            'picpath':item['picpath'],
            'username':item['member'][0]['username'],'created':item['created']
        }

    }
    live(){
        this.navCtrl.push(LivestreamPage)
    }
    gotodoctors(){
        this.navCtrl.push(AlldoctorsPage);
    }
    gotoclincs(){
        this.navCtrl.push(AllclinksPage);
    }
    goTrans(){
        this.navCtrl.push(NaqlbaryPage);
    }
    goTransAir(){
        this.navCtrl.push(AirtansportPage);

    }
    goHorsesupp(){
        this.navCtrl.push(HrssupsellersPage)
    }
    goHorseSellers(){
        this.navCtrl.push(HorsesellerPage)

    }
    gochat(){
        if(this.member_id !=null){
        this.navCtrl.push(ChatPage,{mode:0});
        }
        else{
            this.navCtrl.push(LoginPage);

        }
    }
    gohorsdays(){
        this.navCtrl.push(HorsedaysPage);
    }
    tours(){
        this.navCtrl.push(TourtablesPage);
    }
    addnew(){
        this.navCtrl.push(AddhorsedaysPage);
      }
    // doInfinite(infiniteScroll) {
    //     console.log('Begin async operation');
    //
    //     // setTimeout(() => {
    //             // this.items.push( this.items.length );
    //             this.diaries.getAllDiaries(this.items.length-1).subscribe(res=> {
    //                 console.log(res['diaries'])
    //                 for (let i = 0; i <4; i++) {
    //                     if(res['diaries'][i]!=null){
    //                     this.items.push(res['diaries'][i])}
    //
    //
    //                 }
    //                 })
    //
    //         // this.diaries.getAllDiaries(this.items.length-1).subscribe(res=> {
    //         //     console.log(res['diaries'])
    //         //     this.items=res['diaries']
    //         // })
    //         console.log('Async operation has ended');

            // infiniteScroll.complete();
    // }


}