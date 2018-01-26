import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FeePage } from '../fee/fee';
import { CancelhintPage } from '../cancelhint/cancelhint';
import {TransportionhisdetailsPage} from "../transportionhisdetails/transportionhisdetails";




@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {
  public order:boolean = true;
  public contine:boolean = false;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.contine = true;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportPage');
  }
  Order(){
    this.order = false;
  }
  Contiue(){
   this.contine = true;
   document.getElementById('order').style.display = 'none';
   document.getElementById('infodiv').style.display = 'block';
  }
  fee()
  {
    this.navCtrl.push(TransportionhisdetailsPage,this.navParams.data)

   //  let modal = this.modalCtrl.create(FeePage);
   // modal.present();
  }
  finish()
  {
   let modal = this.modalCtrl.create(CancelhintPage);
   modal.present();
  }
}
