import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FeePage } from '../fee/fee';
import { CancelhintPage } from '../cancelhint/cancelhint';
import {TransportionhisdetailsPage} from "../transportionhisdetails/transportionhisdetails";

import {LandtransportationProvider} from "../../providers/landtransportation/landtransportation";
import {CommonservicesProvider} from "../../providers/commonservices/commonservices";



@Component({
  selector: 'page-transport',
  templateUrl: 'transport.html',
})
export class TransportPage {
  // public order:boolean = true;
  // public contine:boolean = false;
  // constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  //
  //
  // }
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad TransportPage');
  // }
  // Order(){
  //   this.order = false;
  // }
  // Contiue(){
  //  this.contine = true;
  //  document.getElementById('order').style.display = 'none';
  //  document.getElementById('infodiv').style.display = 'block';
  // }

  constructor(public common:CommonservicesProvider,public orderProvider:LandtransportationProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  _order
  order_id
  transport_service_provider
  mobile
  origin
  destination
  cost
  status
  distance
  created
  sendComplain
  transporterFlag:boolean
  public static CONTINUE:string="continue"
  public static CANCEL:string="cancel"
  public static FINISH:string="finish"
  public static CONFIRM:string="confirm"
  ionViewWillEnter() {
    this.common.getStoredValue('user').then(user=>{
      console.log(user['service'][0]['service_id'])
      if(user['service'][0]['service_id']==4){
        this.transporterFlag=true
      }else{
        this.transporterFlag=false

      }
    })
    this.transporterFlag=false
    this._order=this.navParams.data
    this.order_id=this._order.order_id
    this.transport_service_provider=this._order.transport_service_provider
    this.mobile=this._order.mobile
    this.origin=this._order.origin
    this.destination=this._order.destination
    this.cost=this._order.cost
    this.distance=this._order.distance
    this.status=this._order.status
    this.created=this._order.created
  }
  action(action){
    console.log(action);
    let sendAction={
      'order_id':this.order_id,
      'status':action
    }
    this.orderProvider.customerConfirm(sendAction).subscribe(res=>{

      console.log(res)
      this.order_id=this._order.order_id
      this.transport_service_provider=this._order.transport_service_provider
      this.mobile=this._order.mobile
      this.origin=this._order.origin
      this.destination=this._order.destination
      this.cost=this._order.cost
      this.status=res['status']
      this.created=this._order.created
    })
  }
  complain(){
    this.common.getStoredValue('user').then(res=>{

      let msg={
        "order_id":this.order_id,
        "member_id":res.member_id,
        "message":this.sendComplain
      }
      this.orderProvider.customerComplaint(msg).subscribe(res=>{
        this.common.presentToast('تم الارسال')
      })
    })}


fee()
  {
    this.navCtrl.push(TransportionhisdetailsPage,this.navParams.data)

   //  let modal = this.modalCtrl.create(FeePage);
   // modal.present();
  }}
//   finish()
//   {
//    let modal = this.modalCtrl.create(CancelhintPage);
//    modal.present();
//   }
// }
