import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";
import {KnowladgeProvider} from "../../providers/knowladge/knowladge";


@Component({
  selector: 'page-knowlegedetails',
  templateUrl: 'knowlegedetails.html',
})
export class KnowlegedetailsPage {

  constructor(public common:CommonservicesProvider,public news:KnowladgeProvider,public navCtrl: NavController, public navParams: NavParams) {

  }
newsD
  details:any
  title
    attachments
    picpath
  ionViewWillEnter() {
    let self=this
    this.news.getnewsDetails(this.navParams.data).subscribe(res=>{
    self.newsD=res[0]
self.title=res[0].title_ar
        self.details=res[0].details
        self.attachments=res[0].attachments
        self.picpath=res[0].picpath
        console.log('ionViewDidLoad KnowlegedetailsPage',self.newsD);

    })
  }
  gocomments(){

    this.navCtrl.push(CommentsPage);
  }
}
