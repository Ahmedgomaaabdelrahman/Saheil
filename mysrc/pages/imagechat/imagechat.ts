import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImagechatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
    selector: 'page-imagechat',
    templateUrl: 'imagechat.html',
})
export class ImagechatPage {
image
    constructor(public navCtrl: NavController, public navParams: NavParams) {

     // this.image=null
        console.log(this.navParams.data)
     this.image= this.navParams.data
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ImagechatPage');
    }

}