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
// import { TranslateModule } from '@ngx-translate/core';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { ClinkdetailsPage } from '../pages/clinkdetails/clinkdetails';
import { AllclinksPage } from '../pages/allclinks/allclinks';
import { EditaccountPage } from '../pages/editaccount/editaccount';

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
    EditaccountPage
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
      })

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
    AllclinksPage,
    EditaccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthproviderProvider,DomainProvider,GetServicesProvider,SearchProvider,UserProvider,
    CommonservicesProvider,FCM
  ]
})
export class AppModule {}
