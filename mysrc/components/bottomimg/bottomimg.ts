import { Component } from '@angular/core';

/**
 * Generated class for the BottomimgComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bottomimg',
  templateUrl: 'bottomimg.html'
})
export class BottomimgComponent {

  text: string;

  constructor() {
    console.log('Hello BottomimgComponent Component');
    this.text = 'Hello World';
  }

}
