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
    AlldoctorsPage
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
    BottomimgComponent,
    ActivecodePage,
    LanguagePage,
    ForgetpassPage,
    ChoosecountryPage,
    DoctordetailsPage,
    AlldoctorsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
