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
import {TransportMessagePage} from "../transport-message/transport-message";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import {GetServicesProvider} from "../../providers/get-services/get-services";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    index:any;
timer:any
slideImages:any;
startTimer:any;
    topSliderIndex:any;
    items:any;
    show:any;
    member_id:any;
    transporterFlag:any;
    service1
    service2
    service3
    service4
    service5
    service6
    constructor(public service:GetServicesProvider,private nativePageTransitions: NativePageTransitions,private album:AlbumProvider,private streamingMedia: StreamingMedia,public diaries:DiariesProvider,public menuCtrl:MenuController,public common:CommonservicesProvider,public navCtrl: NavController) {
      let self=this
      this.service.serviceDetails().subscribe(res=>{
        console.log(res)
        self.servicesDetails=res
        self.service1=res[1].details
        self.service2=res[2].details
        self.service3=res[3].details
        self.service4=res[4].details
        self.service5=res[5].details
        self.service6=res[6].details

        console.log('ddd', self.servicesDetails)

      })
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
                if(user['service'][0]['service_id']==4){
                    this.transporterFlag=true
                }else{
                    this.transporterFlag=false

                }
            }
        })

    }
    sliderImage:any;
  sliderIndex:any;
    sliderRefresher(){
this.sliderIndex=0;
let self=this
      this.sliderImage=''
      console.log(self.sliderIndex);
      console.log(self.slideImages[self.sliderIndex]);
      console.log(self.slideImages[self.sliderIndex]['picpath']);
      self.sliderImage=self.slideImages[self.sliderIndex]['picpath']
      self.sliderIndex++

      this.startTimer=   setInterval(function () {
this.sliderImage=''
                        console.log(self.sliderIndex);
                        console.log(self.slideImages[self.sliderIndex]);
                        console.log(self.slideImages[self.sliderIndex]['picpath']);
                        self.sliderImage=self.slideImages[self.sliderIndex]['picpath']
                        if(self.sliderIndex<(self.slideImages.length-1)){
                          self.sliderIndex++

                        }else if(self.sliderIndex==(self.slideImages.length-1)){
                          self.sliderIndex=0
                        }
                },4000);

    }
    ionViewWillLeave(){
      clearInterval(this.startTimer)
    }
servicesDetails:any;
    ionViewWillEnter(){


        this.page=1
        this.menuCtrl.enable(true)
        this.items=[]
        this.show=[]
      // this.servicesDetails=[]
        this.slideImages=[]
        let self=this
this.album.homeSlider().subscribe(res=>{
    console.log(res)
    this.slideImages=res;
    this.sliderRefresher();
})


    }

page

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
        this.navCtrl.push(TransportMessagePage);
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

}
