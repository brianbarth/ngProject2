import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {

  cartData$: Observable<any[]>;
  upper = false;
  scramble = false;
  word: string;
  toggle = false;
  errorMessage = false;
  capitalizeWord: string;
  allCapsWord: string;

  constructor(private service: CartDataService) {
  }

  ngOnInit() {
    this.cartData$ = this.service.sendData();
      console.log(this.cartData$);
  }

  onUserInput(event) {
    this.word = event.target.value;
  }
  onAddItem() {
    this.word = this.word.toLowerCase();
    this.word = this.word.charAt(0).toUpperCase() + this.word.slice(1);
    console.log(this.word);

    if (this.cartData$.includes(this.word)) {
      ((document.getElementById('box') as HTMLInputElement).value) = 'FOOD ALREADY EXISTS IN LIST!';
      console.log('error: food already included in array');
      this.errorMessage = !this.errorMessage;
    } else {
    this.cartData$ = [...this.cartData$, this.word];
    console.log('Item Added: ' + this.word);
    }
  }
  onPopItem() {
    this.cartData$ = this.cartData$.slice(0, -1);
    console.log('Item Removed');
  }
  onChangeCaseItem() {
    this.upper = !this.upper;
    if(this.upper === false) {
      console.log('Changed item to lower case');
    } else {
      console.log('Changed item to upper case');
    }
  }
  onToggleScrambleItem() {
    this.scramble = !this.scramble;
    if(this.scramble === true) {
      console.log('Item has been scrambled');
    } else {
      console.log('Item has been unscrambled');
    }
  }
  clearBox() {
    ((document.getElementById('box') as HTMLInputElement).value) = '';
    ((document.getElementById('box') as HTMLInputElement).placeholder) = '';
    console.log('Box cleared');
    if ( this.errorMessage === true ) {
      this.errorMessage = !this.errorMessage;
    }
  }
  onToggleSizeItem() {
    this.toggle = !this.toggle;
    if(this.toggle === true) {
      console.log('Item is large font');
    } else {
      console.log('Item is regular font');
    }
  }
}
