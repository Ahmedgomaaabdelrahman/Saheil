import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
/*
  Generated class for the CommonservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonservicesProvider {

  constructor(public http: HttpClient,private toastCtrl: ToastController) {
    console.log('Hello CommonservicesProvider Provider');
  }
 createTranslateLoader(http: HttpClient) {
        return new TranslateHttpLoader(http, './assets/i18n/', '.json');
    }
    presentToast(msg,callback?) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
          callback
            // console.log('Dismissed toast');
        });

        toast.present();
    }
}
