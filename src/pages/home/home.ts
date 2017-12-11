import { Component } from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import { AlldoctorsPage } from '../alldoctors/alldoctors';
import { AllclinksPage } from '../allclinks/allclinks';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import { TransportPage } from '../transport/transport';
import {AirtansportPage} from "../airtansport/airtansport";
import {HorsesuppPage} from "../horsesupp/horsesupp";
import {HrssupsellersPage} from "../hrssupsellers/hrssupsellers";
import {HorsesellerPage} from "../horseseller/horseseller";
import {LivestreamPage} from "../livestream/livestream";
import { TourtablesPage } from '../tourtables/tourtables';
import {NaqlbaryPage} from "../naqlbary/naqlbary";
import { AddhorsedaysPage } from '../addhorsedays/addhorsedays';
import {DiariesProvider} from "../../providers/diaries/diaries";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    items:any;
    show:any;
    constructor(public diaries:DiariesProvider,public menuCtrl:MenuController,public common:CommonservicesProvider,public navCtrl: NavController) {
        this.menuCtrl.enable(true)
//         this.items=[]
//         this.diaries.getAllDiaries(1).subscribe(res=> {
//             console.log(res['diaries'])
// this.items=res['diaries']
//
//             // for (let i = 0; i < 4; i++) {
//             //     this.items.push(res[i]);
//             // }
//         })
        this.common.getStoredValue('user').then(user=>{
            console.log('user : ',user);
        })

    }
    ionViewWillEnter(){
        this.menuCtrl.enable(true)
        this.items=[]
        this.index=[]
        this.show=[]
        this.diaries.getAllDiaries(0).subscribe(res=> {
            console.log(res['diaries'])
            this.items=res['diaries']
            // this.index=res['diaries']

            // for (let i = 0; i < 4; i++) {
            //     this.items.push(res[i]);
            // }
        })
    }

    clickShow(item){
        console.log(item)
        this.show=[]
        this.show={
            'picpath':item['picpath'],
            'username':item['member'][0]['username'],'created':item['created']
        }
        // this.diaries.getAllDiariesDetails(id).subscribe(res=>{
        //     console.log(res)
        //     this.show=res['diaries'][0]
        // })
    }
    live(){
        this.navCtrl.push(LivestreamPage)
    }
    gotodoctors(){
        this.navCtrl.push(AlldoctorsPage);
    }
    gotoclincs(){
        this.navCtrl.push(AllclinksPage);
    }
    goTrans(){
        this.navCtrl.push(NaqlbaryPage);
    }
    goTransAir(){
        this.navCtrl.push(AirtansportPage);

    }
    goHorsesupp(){
        this.navCtrl.push(HrssupsellersPage)
    }
    goHorseSellers(){
        this.navCtrl.push(HorsesellerPage)

    }
    tours(){
        this.navCtrl.push(TourtablesPage);
    }
    addnew(){
        this.navCtrl.push(AddhorsedaysPage);
      }
    // doInfinite(infiniteScroll) {
    //     console.log('Begin async operation');
    //
    //     // setTimeout(() => {
    //             // this.items.push( this.items.length );
    //             this.diaries.getAllDiaries(this.items.length-1).subscribe(res=> {
    //                 console.log(res['diaries'])
    //                 for (let i = 0; i <4; i++) {
    //                     if(res['diaries'][i]!=null){
    //                     this.items.push(res['diaries'][i])}
    //
    //
    //                 }
    //                 })
    //
    //         // this.diaries.getAllDiaries(this.items.length-1).subscribe(res=> {
    //         //     console.log(res['diaries'])
    //         //     this.items=res['diaries']
    //         // })
    //         console.log('Async operation has ended');

            // infiniteScroll.complete();
    // }
    more(){
        // this.items=[]
        this.diaries.getAllDiaries(4).subscribe(res=> {
            console.log(res['diaries'])
            for (let i = 0; i <4; i++) {
                if(res['diaries'][i]!=null){
                    this.items.push(res['diaries'][i])
// this.index.push(res['diaries'][i])
                }

            }
        })
    }
    index
    less(){
    //     this.items=[]
    //     console.log(this.index)
    //     console.log(this.index.length)
    //     this.diaries.getAllDiaries(this.index.length-7).subscribe(res=> {
    //         console.log(res['diaries'])
    //         for (let i = 0; i <4; i++) {
    //             this.index.splice(this.index.length-1,1)
    //             if(res['diaries'][i]!=null){
    //                 this.items.push(res['diaries'][i])}
    //         }
    //     })
    }
}