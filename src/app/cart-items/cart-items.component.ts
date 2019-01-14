import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { Observable } from 'rxjs';
import { Cart } from './cart.interface';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {

  cartData: Cart[];
  upper = false;
  scramble = false;
  toggle = false;
  errorMessage: string | false = false;
  capitalizeWord: string;
  allCapsWord: string;

  constructor(private cartService: CartDataService) {
    cartService.getCartData$().subscribe(data => {
      this.cartData = data;
    });
  }

  ngOnInit() {

  }

  onAddItem(newWord: string) {
    let word = newWord.toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);

    if (this.cartData.map( data => data.name ).includes(word)) {
      this.errorMessage = 'FOOD ALREADY EXISTS IN LIST!';
      console.log('error: food already included in array');
      return;
    }

    this.cartService.addToCart({ name: word })
    console.log('Item Added: ' + word);
  }

  clearErrorMessage() {
    this.errorMessage = false;
  }

  onRemoveItem(newWord: string) {
    let word = newWord.toLowerCase();
    word = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(word);
    const foundItem = this.cartData.find(item => item.name === word)
    if ( !foundItem ) {
      this.errorMessage = 'FOOD IS NOT IN LIST!';
      console.log('error: food already included in array');
      return;
    } 

    this.cartService.removeFromCart(foundItem);
    
    console.log('Item Removed');
  }
  // onChangeCaseItem() {
  //   this.upper = !this.upper;
  //   if(this.upper === false) {
  //     console.log('Changed item to lower case');
  //   } else {
  //     console.log('Changed item to upper case');
  //   }
  // }
  // onToggleScrambleItem() {
  //   this.scramble = !this.scramble;
  //   if(this.scramble === true) {
  //     console.log('Item has been scrambled');
  //   } else {
  //     console.log('Item has been unscrambled');
  //   }
  // }
  clearBox() {
    ((document.getElementById('box') as HTMLInputElement).value) = '';
    ((document.getElementById('box') as HTMLInputElement).placeholder) = '';
    console.log('Box cleared');
    if ( this.errorMessage === true ) {
      // this.errorMessage = !this.errorMessage;
    }
  }
  // onToggleSizeItem() {
  //   this.toggle = !this.toggle;
  //   if(this.toggle === true) {
  //     console.log('Item is large font');
  //   } else {
  //     console.log('Item is regular font');
  //   }
  // }
}
