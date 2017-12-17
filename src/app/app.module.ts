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
import {Users} from '../modes/users';

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
import { HrssupsellersPage } from '../pages/hrssupsellers/hrssupsellers';
import { SellerdetailsPage } from '../pages/sellerdetails/sellerdetails';
import { ConsultationPage } from '../pages/consultation/consultation';
import { ConsuldetailsPage } from '../pages/consuldetails/consuldetails';
import { AddproductPage } from '../pages/addproduct/addproduct';
import { ProductdetailsPage } from '../pages/productdetails/productdetails';
import { HorsesellerPage } from '../pages/horseseller/horseseller';
import { SupsProvider } from '../providers/sups/sups';
import { MailProvider } from '../providers/mail/mail';
import { HorsesPage } from '../pages/horses/horses';
import { TourtablesPage } from '../pages/tourtables/tourtables';
import { OnetourcommentsPage } from '../pages/onetourcomments/onetourcomments';
import { TournewsPage } from '../pages/tournews/tournews';
import { OnetourdetailsPage } from '../pages/onetourdetails/onetourdetails';
import { OnetourPage } from '../pages/onetour/onetour';
import { LivestreamPage } from '../pages/livestream/livestream';
import { SellerproductsPage } from '../pages/sellerproducts/sellerproducts';
import { EdithorsePage } from '../pages/edithorse/edithorse';
import { EditproductPage } from '../pages/editproduct/editproduct';
import { AddhorsePage } from '../pages/addhorse/addhorse';
import { MyhorsesPage } from '../pages/myhorses/myhorses';
import { PaymentPage } from '../pages/payment/payment';
import { DealersProvider } from '../providers/dealers/dealers';
import { KnowladgeProvider } from '../providers/knowladge/knowladge';
import { AllmyhorsesPage } from '../pages/allmyhorses/allmyhorses';
import { FavtypePage } from '../pages/favtype/favtype';
import { ImagedetailsPage } from '../pages/imagedetails/imagedetails';
import { AlbumPage } from '../pages/album/album';
import { AllImagesPage } from '../pages/all-images/all-images';
import { ChampionsNewsProvider } from '../providers/champions-news/champions-news';
import { AlbumProvider } from '../providers/album/album';
import { NextevedetailsPage } from '../pages/nextevedetails/nextevedetails';
import { NexteventsPage } from '../pages/nextevents/nextevents';
import { HorsedaysPage } from '../pages/horsedays/horsedays';
import { AddhorsedaysPage } from '../pages/addhorsedays/addhorsedays';
import { NaqldetailsPage } from '../pages/naqldetails/naqldetails';
import { NaqlbaryPage } from '../pages/naqlbary/naqlbary';
import { UpcommingEventsProvider } from '../providers/upcomming-events/upcomming-events';
import { HorsesBlogsProvider } from '../providers/horses-blogs/horses-blogs';
import {TransportMessagePage} from "../pages/transport-message/transport-message";
import { DiariesProvider } from '../providers/diaries/diaries';
import {HorsedetailsPage} from "../pages/horsedetails/horsedetails";
import { Daf3Page } from '../pages/daf3/daf3';



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
    AllsuppPage,TransportMessagePage,
    KnowlegePage,
    KnowlegedetailsPage,
    CommentsPage,
    SendrequestPage,
    AirtansportPage,
    AirtransdetailsPage,
    CartshoppingPage,
    FavoritePage,
    ChatPage,
    HrssupsellersPage,
    SellerdetailsPage,
    ConsultationPage,
    ConsuldetailsPage,
    AddproductPage,
    ProductdetailsPage,
    HorsesellerPage,
    HorsesPage,HorsedetailsPage,
    TournewsPage,
    TourtablesPage,
    OnetourcommentsPage,
    OnetourdetailsPage,
    OnetourPage,
    LivestreamPage,
    SellerproductsPage,
    EdithorsePage,
    EditproductPage,
    AddhorsePage,
    MyhorsesPage,
    PaymentPage,
    AllmyhorsesPage,
    FavtypePage,
    ImagedetailsPage,
    AlbumPage,
    AllImagesPage,
    NexteventsPage,
    NextevedetailsPage,
    AddhorsedaysPage,
    HorsedaysPage,
    NaqldetailsPage,
    NaqlbaryPage,
    Daf3Page
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
    HorsesuppPage,HorsedetailsPage,
    AllsuppPage,
    KnowlegePage,
    KnowlegedetailsPage,
    SendrequestPage,
    ActivecodePage,
    LanguagePage,
    ForgetpassPage,
    ChoosecountryPage,
    DoctordetailsPage,
    AlldoctorsPage,TransportMessagePage,
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
    ChatPage,
    HrssupsellersPage,
    SellerdetailsPage,
    ConsultationPage,
    ConsuldetailsPage,
    AddproductPage,
    ProductdetailsPage,
    HorsesellerPage,
    HorsesPage,
    TournewsPage,
    TourtablesPage,
    OnetourcommentsPage,
    OnetourdetailsPage,
    OnetourPage,
    LivestreamPage,
    SellerproductsPage,
    EdithorsePage,
    EditproductPage,
    AddhorsePage,
    MyhorsesPage,
    PaymentPage,
    AllmyhorsesPage,
    FavtypePage,
    ImagedetailsPage,
    AlbumPage,
    AllImagesPage,
    NexteventsPage,
    NextevedetailsPage,
    AddhorsedaysPage,
    HorsedaysPage,
    NaqldetailsPage,
    NaqlbaryPage,
    Daf3Page
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},AuthproviderProvider,DomainProvider,GetServicesProvider,SearchProvider,UserProvider,
    CommonservicesProvider,FCM,SecureStorage,Camera,ActionSheet,Geolocation,{ provide: IonicStorageModule, useClass: IonicStorageModule},
    VeterinariansProvider,
    VeterinaryclinicsProvider,
    SupsProvider,
    MailProvider,Users,
    DealersProvider,
    KnowladgeProvider,
    ChampionsNewsProvider,
    AlbumProvider,
    UpcommingEventsProvider,
    HorsesBlogsProvider,
    DiariesProvider
  ]
})
export class AppModule {}
