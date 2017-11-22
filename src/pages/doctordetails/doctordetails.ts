import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";


@Component({
  selector: 'page-doctordetails',
  templateUrl: 'doctordetails.html',
})
export class DoctordetailsPage {
  id:number
  details
  constructor(public veterinarian:VeterinariansProvider,public navParams: NavParams) {

  }

ionViewWillLoad(){
    console.log(this.navParams.data)
    this.details=[]
    this.id=this.navParams.data
  this.veterinarian.getVeterinarianDetail(this.id).subscribe(v=>{
    this.details=v[0];
    console.log(v)
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctordetailsPage');

  }

}
