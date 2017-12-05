import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';


@Component({
  selector: 'page-knowlegedetails',
  templateUrl: 'knowlegedetails.html',
})
export class KnowlegedetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KnowlegedetailsPage');
  }
  gocomments(){
    this.navCtrl.push(CommentsPage);
  }
}
