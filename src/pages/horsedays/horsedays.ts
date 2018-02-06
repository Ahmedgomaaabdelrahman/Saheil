import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AddhorsedaysPage } from '../addhorsedays/addhorsedays';
import { DiariesProvider } from '../../providers/diaries/diaries';
import { CommonservicesProvider } from '../../providers/commonservices/commonservices';


@Component({
  selector: 'page-horsedays',
  templateUrl: 'horsedays.html',
})
export class HorsedaysPage {
    index:any;
    timer:any
    // video='http://www.sahel-horse.com/uploads/videos/5a4921ad2f46f.3gp'
    startTimer:any
    items:any;
    show:any;
    member_id
    constructor(public diaries:DiariesProvider,public menuCtrl:MenuController,public common:CommonservicesProvider,public navCtrl: NavController) {
        this.menuCtrl.enable(true)

        this.common.getStoredValue('user').then(user=>{
            console.log('user : ',user);
        })

    }
  ionViewWillLeave(){
    clearInterval(this.startTimer)
    clearInterval(this.timer)
  }
    ionViewWillEnter(){
        this.page=1
        this.menuCtrl.enable(true)
        this.items=[]
        this.show=[]
        let self=this
        this.diaries.getAllDiaries(this.page).subscribe(res=> {

            this.items=res['diaries']
            self.show=[]
            let i=0
            self.startTimer=   setInterval(function () {
                self.show={
                    'picpath':res['diaries'][i]['picpath'],
                    'video':res['diaries'][i]['video'],
                    'username':res['diaries'][i]['member'][0]['username'],'created':res['diaries'][i]['created']
                }

                if(i!=self.items.length-1){
                    i++}else{
                    i=0
                }
            },3000);

        })
    }
    less(){
        console.log(this.page)
        if(this.page>=0){
            clearInterval(this.timer);
            clearInterval(this.startTimer);
            this.page-=1

            let self=this
            // clearInterval()
            console.log(this.items[this.items.length-1]['diary_id'])
            console.log(this.items.length-1)
            this.diaries.getAllDiariesasc(this.page).subscribe(res=> {
                    this.index=0
                    this.items=[]
                    console.log('new items :',res['diaries'].length)

                    this.items=res['diaries']
                    self.show=[]
                    let i=0
                    self.startTimer=   setInterval(function () {
                        self.show={
                            'picpath':res['diaries'][i]['picpath'],
                            'video':res['diaries'][i]['video'],
                            'username':res['diaries'][i]['member'][0]['username'],'created':res['diaries'][i]['created']
                        }
                        if(i!=self.items.length-1){
                            i++}else{
                            i=0
                        }
                    },3000);
                }
            )
        }
    }
    page
    more(){

        this.page+=1
        console.log('num of page :',this.page)

        let self=this
        this.diaries.getAllDiaries(this.page).subscribe(res=> {

                if(res['diaries'].length !=0){
                    clearInterval(this.timer);
                    clearInterval(this.startTimer);
                    this.index=0
                    this.items=[]
                    this.items=res['diaries']
                    self.show=[]
                    let i=0
                    self.startTimer=   setInterval(function () {
                        self.show={
                            'picpath':res['diaries'][i]['picpath'],
                            'video':res['diaries'][i]['video'],
                            'username':res['diaries'][i]['member'][0]['username'],'created':res['diaries'][i]['created']
                        }

                        if(i!=self.items.length-1){
                            i++}else{
                            i=0
                        }
                    },3000);
                }else {this.page-=1
                    this.common.presentToast('انتهت اليوميات')
                }
            }
        )
    }
    clickShow(item){

        clearInterval(this.timer);
        clearInterval(this.startTimer);
console.log(item)
console.log(item['picpath'] != 'http://www.sahel-horse.com/uploads/')
        console.log(item['picpath'])
        console.log(item['video'])
        this.show=[]

        this.show={
            'picpath':item['picpath'],
            'video':item['video'],
            'username':item['member'][0]['username'],'created':item['created']
        }

    }
    addnew(){
        this.navCtrl.push(AddhorsedaysPage);
    }
}
