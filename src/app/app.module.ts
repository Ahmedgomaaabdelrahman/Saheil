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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CommonservicesProvider } from '../providers/commonservices/commonservices';
import { FCM } from '@ionic-native/fcm';
import { IonicStorageModule,Storage } from '@ionic/storage';

// import { TranslateModule } from '@ngx-translate/core';

import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ClinkdetailsPage } from '../pages/clinkdetails/clinkdetails';
import { AllclinksPage } from '../pages/allclinks/allclinks';
import { EditaccountPage } from '../pages/editaccount/editaccount';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { Geolocation } from '@ionic-native/geolocation';
import {SelectlocPage} from "../pages/selectloc/selectloc";
import { VeterinariansProvider } from '../providers/veterinarians/veterinarians';
import { TransportPage } from '../pages/transport/transport';
import { FeePage } from '../pages/fee/fee';
import { RatePage } from '../pages/rate/rate';
import { CancelhintPage } from '../pages/cancelhint/cancelhint';
import { ComplainPage } from '../pages/complain/complain';
import { HorsesuppPage } from '../pages/horsesupp/horsesupp';
import { AllsuppPage } from '../pages/allsupp/allsupp';
import { KnowlegePage } from '../pages/knowlege/knowlege';
import { KnowlegedetailsPage } from '../pages/knowlegedetails/knowlegedetails';
import { CommentsPage } from '../pages/comments/comments';
import { SendrequestPage } from '../pages/sendrequest/sendrequest';
import { AirtansportPage } from '../pages/airtansport/airtansport';
import { AirtransdetailsPage } from '../pages/airtransdetails/airtransdetails';
import { CartshoppingPage } from '../pages/cartshopping/cartshopping';
import { FavoritePage } from '../pages/favorite/favorite';
import { ChatPage } from '../pages/chat/chat';
import { VeterinaryclinicsProvider } from '../providers/veterinaryclinics/veterinaryclinics';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoadingPage,
    AboutsahielPage,
    LoginPage,
    SignupPage,
      SelectlocPage,
      SendrequestPage,
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
    AllclinksPage,
    EditaccountPage,
    TransportPage,
    FeePage,
    RatePage,
    CancelhintPage,
    ComplainPage,
    HorsesuppPage,
    AllsuppPage,
    KnowlegePage,
    KnowlegedetailsPage,
    CommentsPage,
    SendrequestPage,
    AirtansportPage,
    AirtransdetailsPage,
    CartshoppingPage,
    FavoritePage,
    ChatPage
  ], 
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),

      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: (createTranslateLoader),
              deps: [HttpClientModule]
          }
      }),IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoadingPage,
    AboutsahielPage,
    LoginPage,
    SignupPage,
      SelectlocPage,
    HeaderComponent,
    SubheaderComponent,
    BottomimgComponent,
    HorsesuppPage,
    AllsuppPage,
    KnowlegePage,
    KnowlegedetailsPage,
      SendrequestPage,
    ActivecodePage,
    LanguagePage,
    ForgetpassPage,
    ChoosecountryPage,
    DoctordetailsPage,
    AlldoctorsPage,
    ClinkdetailsPage,
    AllclinksPage,
    EditaccountPage,
    TransportPage,
    FeePage,
    RatePage,
    CancelhintPage,
    ComplainPage,
    CommentsPage,
    SendrequestPage,
    AirtansportPage,
    AirtransdetailsPage,
    CartshoppingPage,
    FavoritePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthproviderProvider,DomainProvider,GetServicesProvider,SearchProvider,UserProvider,
    CommonservicesProvider,FCM,SecureStorage,Camera,ActionSheet,Geolocation,{ provide: IonicStorageModule, useClass: IonicStorageModule},
    VeterinariansProvider,
    VeterinaryclinicsProvider
  ]
})
export class AppModule {}
