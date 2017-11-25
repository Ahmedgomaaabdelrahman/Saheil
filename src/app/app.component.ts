import {  Component,ViewChild  } from '@angular/core';
import {Platform, Nav, Events} from 'ionic-angular';

// import { Platform} from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav) nav: Nav;
  flag:boolean;
  rootPage:any = LanguagePage;

  constructor(public events:Events,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private common:CommonservicesProvider
  ,private auth:AuthproviderProvider) {
      this.flag=false;

    platform.ready().then(() => {
        this.events.subscribe('auth', (res) => {
            // user and time are the same arguments passed in `events.publish(user, time)`
        this.setFlag()
        });      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     this.common.getStoredValue('xuser').then(user=>{
       console.log(user);
       if(user){
           this.flag=true
         this.nav.setRoot(HomePage,user)
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
           this.common.removeStoredKey('xuser')
           this.common.removeStoredKey('user')
           this.flag=false;
});
   })
    }
    knowladge(){
        this.nav.push(KnowlegePage)
    }
    goToMain(){
        this.nav.push(HomePage)
    }
    setFlag(){
        this.common.getStoredValue('user').then(user=>{
            console.log('flag check',user)
            if(user!=null){
                this.flag=true

            }else{
                this.flag=false
            }
        })
    }
}

