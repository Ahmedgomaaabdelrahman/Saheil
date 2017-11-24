import {  Component,ViewChild  } from '@angular/core';
import {Platform,Nav } from 'ionic-angular';

// import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoadingPage } from "../pages/loading/loading";
import { LanguagePage } from '../pages/language/language';
import {CommonservicesProvider} from "../providers/commonservices/commonservices";
import {LoginPage} from "../pages/login/login";
import {AuthproviderProvider} from "../providers/authprovider/authprovider";
import {EditaccountPage} from "../pages/editaccount/editaccount";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

  rootPage:any = LanguagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private common:CommonservicesProvider
  ,private auth:AuthproviderProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
     this.common.getStoredValue('user').then(user=>{
       console.log(user);
       if(user){
         this.nav.setRoot(HomePage,user)
       }
     })
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
    updateInfo(){
this.nav.setRoot(EditaccountPage)
  }
    logout(){
    this.common.presentLoadingDefault();
   this.common.getStoredValue('user').then(user=>{
       console.log(user.member_id)

       this.auth.logout(user.member_id).subscribe(res=>{
  console.log(res)
  this.common.loadDismess()
    this.nav.setRoot(LoginPage)
           this.common.removeStoredKey('user')
});
   })
    }
}

