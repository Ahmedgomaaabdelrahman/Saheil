import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoadingPage } from "../pages/loading/loading";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { AboutsahielPage } from "../pages/aboutsahiel/aboutsahiel";
import { HeaderComponent } from "../components/header/header";
import { SubheaderComponent } from "../components/subheader/subheader";
import { BottomimgComponent } from "../components/bottomimg/bottomimg";
import { ActivecodePage } from '../pages/activecode/activecode';
import { LanguagePage } from '../pages/language/language';
import { ForgetpassPage } from '../pages/forgetpass/forgetpass';
import { ChoosecountryPage } from '../pages/choosecountry/choosecountry';
import { DoctordetailsPage } from '../pages/doctordetails/doctordetails';
import { AlldoctorsPage } from '../pages/alldoctors/alldoctors';
import {GetServicesProvider} from "../providers/get-services/get-services";
import {DomainProvider} from "../providers/domain/domain";
import {SearchProvider} from "../providers/search/search";
import {UserProvider} from "../providers/user/user";
import {AuthproviderProvider} from "../providers/authprovider/authprovider";
import {HttpClientModule} from "@angular/common/http";
import { CommonservicesProvider } from '../providers/commonservices/commonservices';
import { FCM } from '@ionic-native/fcm';
import { ClinkdetailsPage } from '../pages/clinkdetails/clinkdetails';
import { AllclinksPage } from '../pages/allclinks/allclinks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoadingPage,
    AboutsahielPage,
    LoginPage,
    SignupPage,
    HeaderComponent,
    SubheaderComponent,
    BottomimgComponent,
    ActivecodePage,
    LanguagePage,
    ForgetpassPage,
    ChoosecountryPage,
    DoctordetailsPage,
    AlldoctorsPage,
    ClinkdetailsPage,
    AllclinksPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoadingPage,
    AboutsahielPage,
    LoginPage,
    SignupPage,
    HeaderComponent,
    SubheaderComponent,
    BottomimgComponent,
    ActivecodePage,
    LanguagePage,
    ForgetpassPage,
    ChoosecountryPage,
    DoctordetailsPage,
    AlldoctorsPage,
    ClinkdetailsPage,
    AllclinksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthproviderProvider,DomainProvider,GetServicesProvider,SearchProvider,UserProvider,
    CommonservicesProvider,FCM
  ]
})
export class AppModule {}
