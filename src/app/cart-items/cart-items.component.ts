import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  cartData: CartDataService;
  dataArray: string[];
  upper = false;
  scramble = false;
  word: string;
  toggle = false;

  constructor(cartData: CartDataService) {
    this.dataArray = cartData.sendData();
  }

ngOnInit() {}

onUserInput(event) {
  this.word = event.target.value;
}
onAddItem() {
  this.dataArray = [...this.dataArray, this.word];
  console.log('Item Added: ' + this.word);
}
onPopItem() {
  this.dataArray = this.dataArray.slice(0, -1);
  console.log('Item Removed');
}
onUpperItem() {
  this.upper = true;
  console.log('Item To Upper Case');
}
onLowerItem() {
  this.upper = false;
  console.log('Item To Lower Case');
}
onScrambleItem() {
  this.scramble = true;
  console.log('Item Scrambled');
}
onUnscrambleItem() {
  this.scramble = false;
  console.log('Item Unscrambled');
}
clearBox() {
  ((document.getElementById('box') as HTMLInputElement).value) = '';
  console.log('This should clear the box');
}
onLargeItem() {
  this.toggle = true;
  console.log('Large Font');
}
onSmallItem() {
  this.toggle = false;
  console.log('Small Font');
}

}
