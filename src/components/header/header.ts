import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { CartshoppingPage } from '../../pages/cartshopping/cartshopping';
import { FavoritePage } from '../../pages/favorite/favorite';


/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;

  constructor(public navCtrl: NavController,public menuCtrl: MenuController) {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }
  
  openMenu() {
    this.menuCtrl.open();
  }

  cartshop(){
    this.navCtrl.push(CartshoppingPage);
  }
  fav(){
    this.navCtrl.push(FavoritePage);
  }
}
