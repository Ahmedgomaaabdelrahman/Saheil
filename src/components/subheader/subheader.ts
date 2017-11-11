import { Component } from '@angular/core';

/**
 * Generated class for the SubheaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'subheader',
  templateUrl: 'subheader.html'
})
export class SubheaderComponent {

  text: string;

  constructor() {
    console.log('Hello SubheaderComponent Component');
    this.text = 'Hello World';
  }

}
