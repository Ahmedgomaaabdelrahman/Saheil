import { Component } from '@angular/core';
// import {MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import { AboutsahielPage } from '../aboutsahiel/aboutsahiel';
import { LoadingPage } from '../loading/loading';
import { AlldoctorsPage } from '../alldoctors/alldoctors';
import { AllclinksPage } from '../allclinks/allclinks';
import { IonicPage, NavController, NavParams ,Platform,MenuController} from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
// import {MainService} from "../../providers/main-service";
import { Storage } from '@ionic/storage';
import {DomainProvider} from "../../providers/domain/domain";

@Component({
  selector: 'page-language',
  templateUrl: 'language.html',
})
export class LanguagePage {

  constructor(public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams,
    public platform: Platform,
    private translate: TranslateService,
    private storage: Storage,private domain:DomainProvider) {
      this.menuCtrl.enable(true)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePage');
  }
  gotoNotes(type){
      console.log('ionViewDidLoad LanguagePage',this.translate.getDefaultLang());
      this.translate.use(type)
    DomainProvider.lang=type
      this.translate.setDefaultLang(type);
      console.log('ionViewDidLoad LanguagePage',this.translate.getDefaultLang());

      this.storage.set('lang',type);
    this.navCtrl.push(LoadingPage);
  }

  goDoctors(){

    this.navCtrl.push(AlldoctorsPage);
  }
  gotoclinks(){
      this.navCtrl.push(LoadingPage);

      // this.navCtrl.push(AllclinksPage);
  }
    Change_Toggle(type) {
        this.translate.setDefaultLang(type);
        this.storage.set('lang',type);
        // MainService.lang = type;
        if(type == 'ar'){
            this.platform.setDir('rtl', true);
            console.log(type);
            console.log("arabic");
        }
        else
        {
            this.platform.setDir('ltr', true);
            console.log(type);
            console.log("English");
        }
    }
    toggleMenu()
    {
        this.menuCtrl.toggle();
    }
}
