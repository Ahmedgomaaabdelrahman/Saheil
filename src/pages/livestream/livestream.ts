import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChampionsNewsProvider} from "../../providers/champions-news/champions-news";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'page-livestream',
  templateUrl: 'livestream.html',
})
export class LivestreamPage {
url
  constructor(public sanitizer: DomSanitizer,public champs:ChampionsNewsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

title
    details
    stream
    ionViewWillEnter() {

    this.champs.live().subscribe(res=>{
        this.stream=res[0]['stream']

        this.getSafeUrl(this.stream)
        this.details=res[0]['details']
        this.title=res[0]['title']
        console.log();
        console.log('reeees',res);

    })
  }
    getSafeUrl(url) {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
