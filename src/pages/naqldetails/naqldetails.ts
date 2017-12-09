import {Component, ElementRef, ViewChild} from '@angular/core';
import {  NavController, NavParams , Platform, ViewController} from 'ionic-angular';
import {VeterinariansProvider} from "../../providers/veterinarians/veterinarians";
import {SendrequestPage} from "../sendrequest/sendrequest";
import {TransportMessagePage} from "../transport-message/transport-message";
declare var google;

@Component({
  selector: 'page-naqldetails',
  templateUrl: 'naqldetails.html',
})
export class NaqldetailsPage {
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

            // var str = v[0].map;
            // var res = str.split(", ");
            // document.getElementById("demo").innerHTML = parseFloat(res[1]);

            this.loadMap(parseFloat(v[0].latitude),parseFloat(v[0].longitude));

            console.log('ddd',v[0])
            // let lat=res[0]
            // let lng=res[1].split(' ')
            // console.log('ddd',parseFloat(v[0].latitude))
            // console.log('ddd',parseFloat(v[0].longitude))
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
        this.nav.push(TransportMessagePage,this.id)
    }
}
