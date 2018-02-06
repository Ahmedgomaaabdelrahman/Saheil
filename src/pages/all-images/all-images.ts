import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagedetailsPage } from './../imagedetails/imagedetails';
import {AlbumProvider} from "../../providers/album/album";


@Component({
  selector: 'page-all-images',
  templateUrl: 'all-images.html',
})
export class AllImagesPage {

  constructor(public album:AlbumProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
imgs
    ionViewWillEnter(){
this.imgs=[]
        this.album.getgallery().subscribe(res=>{
            console.log(res)
            this.imgs=res;


        })}
  gotodtails(img_id){
    this.navCtrl.push(ImagedetailsPage,img_id);
  } 
}
