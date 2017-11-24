import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Events, LoadingController, ToastController,ActionSheetController } from 'ionic-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {SecureStorage, SecureStorageObject} from "@ionic-native/secure-storage";
import {Camera,CameraOptions} from "@ionic-native/camera";
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { IonicStorageModule,Storage } from '@ionic/storage';

/*
  Generated class for the CommonservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonservicesProvider {

  constructor(public event:Events,
              public actionSheetCtrl: ActionSheetController,
              private actionSheet: ActionSheet,
              private camera: Camera,
              public loadingCtrl: LoadingController,private store: Storage,
              public http: HttpClient,private toast: ToastController) {
    console.log('Hello CommonservicesProvider Provider');
  }
    storeValue(key:any,value:any){
      console.log('store',key,value)
        this.store.set(key,value);

    }
    getStoredValue(key:string):Promise<any>{
        let promise=new Promise((resolve,reject)=>{
            this.store.get(key).then((val) => {
                console.log('am from local storage ', val);
                resolve(val);
            }).catch((e)=>{
                console.log('storage err :',e);
            });
        });
        return promise;
    }
    removeStoredKey(key:any){
        this.store.remove(key);
    }
    presentActionSheet(msg1,msg2):Promise<any> {
        let promise=new Promise((resolve,reject)=>{

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: msg1,
                    role: 'destructive',
                    handler: () => {
                        resolve(0)
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: msg2,
                    handler: () => {
                        resolve(1)
                        console.log('Archive clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        actionSheet.present();
        })
     return promise
    }

 createTranslateLoader(http: HttpClient) {
        return new TranslateHttpLoader(http, './assets/i18n/', '.json');
    }
    // storeValue(storageName,key,value):Promise<any>{
    //     let promise=new Promise((resolve,reject)=>{
    //
    //
    //         this.secureStorage.create(storageName)
    //             .then((storage: SecureStorageObject) => {
    //
    //                 // storage.get('key')
    //                 //     .then(
    //                 //         data => console.log(data),
    //                 //         error => console.log(error)
    //                 //     );
    //
    //                 storage.set(key, value)
    //                     .then(
    //                         data => {console.log(data)
    //                             resolve(data)
    //                         },
    //                         error => {console.log(error)
    //                             reject(error)}
    //                     );
    //             });
    //     });
    //     return promise;
    // }
    // getStoredValue(storageName,key):Promise<any>{
    //     let promise=new Promise((resolve,reject)=>{
    //
    //
    //         this.secureStorage.create(storageName)
    //             .then((storage: SecureStorageObject) => {
    //                 storage.get(key)
    //                     .then(
    //                         data => {console.log(data)
    //                             resolve(data)
    //                         },
    //                         error => {console.log(error)
    //                             reject(error)}
    //                     );
    //             });
    //     });
    //     return promise;
    // }
    // removeFromStorage(key){
    //     this.secureStorage.create('my_store_name')
    //         .then((storage: SecureStorageObject) => {
    //
    //
    //             storage.remove(key)
    //                 .then(
    //                     data => console.log(data),
    //                     error => console.log(error)
    //                 );
    //
    //         });
    // }
    presentToast(msg:string,closeText?:string,callback?) {
        const toast = this.toast.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
            ,dismissOnPageChange:true,
            showCloseButton:true
            ,closeButtonText:closeText
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
            callback;
        });

        toast.present();

    }
    presentLoadingDefault(msg?:any) {
        this.loading = this.loadingCtrl.create({
            spinner:'ios',
            content: msg
        });

        this.loading.present();
        return this.loading;
    }
    loading:any;
    loadDismess(){
        this.loading.dismiss();
    }
    //profile pic handler

    camPic(source):Promise<any>{
        let promise=new Promise((resolve,reject)=>{
            const options: CameraOptions = {
                quality: 100,
                sourceType:source,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            }

            this.camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                let base64Image =  imageData;
                resolve(base64Image);
            }, (err) => {
                reject(err)
                // Handle error
            });
        })
        return promise;
    }
    eventPublish(ev,content){
        this.event.publish(ev, content)
    }
}
