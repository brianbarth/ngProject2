import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cartData = [
    'bananas',
    'peaches',
    'blueberries',
    'watermelon',
    'strawberries',
    'kiwi',
    'pears',
    'grapes',
    'figs',
    'dates',
    'papaya'
  ];

  sendData(){
    return this.cartData;
  }

  constructor() { }
}
