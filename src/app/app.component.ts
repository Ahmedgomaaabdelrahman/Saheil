import {  Component,ViewChild  } from '@angular/core';
import {Platform, Nav, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoadingPage } from "../pages/loading/loading";
import { LanguagePage } from '../pages/language/language';
import { AlldoctorsPage } from '../pages/alldoctors/alldoctors';
import {CommonservicesProvider} from "../providers/commonservices/commonservices";
import {LoginPage} from "../pages/login/login";
import {AuthproviderProvider} from "../providers/authprovider/authprovider";
import {EditaccountPage} from "../pages/editaccount/editaccount";
import {KnowlegePage} from "../pages/knowlege/knowlege";

import { ConsultationPage } from '../pages/consultation/consultation';
import { AddproductPage } from './../pages/addproduct/addproduct';

import {Users} from '../modes/users';
import {FavoritePage} from "../pages/favorite/favorite";
import {SellerproductsPage} from "../pages/sellerproducts/sellerproducts";
import {AddhorsePage} from "../pages/addhorse/addhorse";
import { AllmyhorsesPage } from '../pages/allmyhorses/allmyhorses';
import { FavtypePage } from './../pages/favtype/favtype';
import { TournewsPage } from '../pages/tournews/tournews';
import { LivestreamPage } from '../pages/livestream/livestream';
import { OnetourdetailsPage } from '../pages/onetourdetails/onetourdetails';
import { AlbumPage } from './../pages/album/album';
import {TourtablesPage} from "../pages/tourtables/tourtables";
import {OnetourPage} from "../pages/onetour/onetour";
import {AllImagesPage} from "../pages/all-images/all-images";
import { NexteventsPage } from './../pages/nextevents/nextevents';
import { NaqlbaryPage } from '../pages/naqlbary/naqlbary';
import { HorsedaysPage } from './../pages/horsedays/horsedays';
import {MyhorsesPage} from "../pages/myhorses/myhorses";
import { Daf3Page } from './../pages/daf3/daf3';
import {InboxchatPage} from "../pages/inboxchat/inboxchat";
import { FollowaccountsPage } from './../pages/followaccounts/followaccounts';
import { SucesspatnerPage } from './../pages/sucesspatner/sucesspatner';
import { SecuritytermsPage } from './../pages/securityterms/securityterms';



@Component({templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;
  flag:boolean;
    supsSellerFlag:boolean;
    horseSellerFlag:boolean;

  // rootPage:any = LanguagePage;
  rootPage:any;

  constructor(public user:Users,public events:Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private common:CommonservicesProvider,private auth:AuthproviderProvider)
  {
      this.flag=false;
      this.supsSellerFlag=false;
      this.horseSellerFlag=false;
    platform.ready().then(() => {

        // console.log('user',this.user.getuser())
        this.events.subscribe('auth', (res) => {
            console.log(res)
        this.identifyUser()
        });      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     this.common.getStoredValue('xuser').then(user=>{
       // console.log(user);
       if(user != null){
           this.identifyUser()
         this.nav.setRoot(HomePage,user)
       }else{
           this.diableFlags()
           this.nav.setRoot(LanguagePage)
       }
     })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    updateInfo(){
this.nav.push(EditaccountPage)
  }
    logout(){

    this.common.presentLoadingDefault();
   this.common.getStoredValue('user').then(user=>{
       console.log(user.member_id)

       this.auth.logout(user.member_id).subscribe(res=>{
  console.log(res)
  this.common.loadDismess()
    this.nav.setRoot(LoginPage)
this.diableFlags()
       });
   })
    }
    diableFlags(){
        this.common.removeStoredKey('xuser')
        this.common.removeStoredKey('user')
        this.flag=false;
        this.supsSellerFlag=false
        this.horseSellerFlag=false
    }
    knowladge(){
        this.nav.push(KnowlegePage)
    }
    goToMain(){
        this.nav.push(HomePage)
    }
    identifyUser(){

        this.common.getStoredValue('user').then(user=>{
            if(user!=null){
                this.flag=true

            }else{
                this.flag=false
            }
if(user['service'] !=null){
            this.user.setuser(user.service[0].service_id)
            console.log('flag check',this.user.getuser()==5)
            // if(user!=null){
            //     this.flag=true
            //
            // }else{
            //     this.flag=false
            // }
            if(this.user.getuser()==5 ){
                this.supsSellerFlag=true
            }else{
                this.supsSellerFlag=false

            }
            if(this.user.getuser()== 6 ){
                this.horseSellerFlag=true
            }else{
                this.horseSellerFlag=false

            }
}
        })

    }
    inbox(){
        this.nav.push(ConsultationPage,'in')
    } outbox(){
        this.nav.push(ConsultationPage,'out')
    }
    supsSeller(){

        this.nav.push(SellerproductsPage)

    }
    fav(){
        this.nav.push(FavtypePage)

    }
    terms(){
        this.nav.push(SecuritytermsPage)

    }
    accounts(){
        this.nav.push(FollowaccountsPage);
    }
    sucesspart(){
        this.nav.push(SucesspatnerPage);
    }
    addproduct(){
        this.nav.push(AddproductPage);
    }
    addHorse(){
        this.nav.push(MyhorsesPage);
    }
    goAlbum(){ 
        this.nav.push(AllImagesPage);
    }
    nextEvent(){
        this.nav.push(NexteventsPage);
    }

    pay(){
        this.nav.push(Daf3Page);

    }
    tournmentsNews(){
        this.nav.push(OnetourPage);

    }
    chatBox(){
        this.nav.push(InboxchatPage);

    }
}

