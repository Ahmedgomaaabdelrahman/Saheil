import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlbumProvider} from "../../providers/album/album";


@Component({
  selector: 'page-imagedetails',
  templateUrl: 'imagedetails.html',
})
export class ImagedetailsPage {

  constructor(public album:AlbumProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
img:any
  title:any
  ionViewWillEnter() {
    console.log(this.navParams.data);
    this.album.getimage(this.navParams.data).subscribe(res=>{
      this.img=res[0]['picpath']
        console.log('image' ,res);

        this.title=res[0]['title_ar']

    })
  }

}
