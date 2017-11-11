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
    BottomimgComponent
  ],
  imports: [
    BrowserModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
