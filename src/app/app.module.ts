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
import { AuthproviderProvider } from '../providers/authprovider/authprovider';
import { DomainProvider } from '../providers/domain/domain';
import { GetServicesProvider } from '../providers/get-services/get-services';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { HttpModule ,Http} from '@angular/http';
import { UserProvider } from '../providers/user/user';
// import {User} from "../models/user/user";

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
    BottomimgComponent],
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
    BottomimgComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthproviderProvider,
    DomainProvider,
    GetServicesProvider,  HttpClient,
    UserProvider
  ]
})
export class AppModule {}
