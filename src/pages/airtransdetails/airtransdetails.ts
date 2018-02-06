import {Component, ElementRef, ViewChild} from '@angular/core';
import {  NavController, NavParams , Platform, ViewController} from 'ionic-angular';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import {SendrequestPage} from "../sendrequest/sendrequest";
declare var google;


@Component({
  selector: 'page-airtransdetails',
  templateUrl: 'airtransdetails.html',
})
export class AirtransdetailsPage {
    @ViewChild('map') mapElement: ElementRef;

    id:number
    details
    ///map
    public map: any;
    public markers =[];
    public location:Location;
    public loc ;
    public placelabel:string;
    public customerid : string;
    constructor(public nav:NavController,public view:ViewController,public platform:Platform,public veterinarian:VeterinariansProvider,public navParams: NavParams) {
        platform.ready().then(() => {
            // this.loadMap();
        });
    }

    ionViewWillLoad(){
        console.log(this.navParams.data)
        this.details=[]
        this.id=this.navParams.data
        this.veterinarian.getVeterinarianDetail(this.id).subscribe(v=>{
            this.details=v[0];
            // this.loc=v[0].map;
            // console.log(v[0].map)
            // parseInt(v[0].map)
            //
            // var str = v[0].map;
            // var res = str.split(", ");
            // document.getElementById("demo").innerHTML = parseFloat(res[1]);

            this.loadMap(parseFloat(v[0].latitude),parseFloat(v[0].longitude));

            // console.log('ddd',res)
            // let lat=res[0]
            // let lng=res[1].split(' ')
            // console.log('ddd',parseFloat(lng[0]))
        })
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad DoctordetailsPage');

    }
    //map
    loadMap(ll,uu) {

        let latLng = new google.maps.LatLng(ll,uu);
        console.log(latLng)
        let mapOptions = {
            // center: latLng,
            center:latLng,

            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        // this.map = new google.maps.Map(document.getElementById("map"),mapOptions)
        this.addMarker(this.map.getCenter());


    }
    addMarker(LatLng){
        let marker  = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: LatLng
        });
        this.markers.push(marker);


    }
    contact(){
        this.nav.push(SendrequestPage,this.id)
    }
}
