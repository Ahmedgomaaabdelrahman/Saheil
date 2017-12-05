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
  ionViewWillEnter() {
    this.news.getnewsDetails(this.navParams.data).subscribe(res=>{
    this.newsD=res

        console.log('ionViewDidLoad KnowlegedetailsPage',res);

    })
  }
  gocomments(){

    this.navCtrl.push(CommentsPage);
  }
}
