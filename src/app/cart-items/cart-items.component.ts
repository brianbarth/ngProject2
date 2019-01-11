import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  dataArray: string[];
  upper = false;
  scramble = false;
  word: string;
  toggle = false;
  errorMessage: string;

  constructor(private cartDataService: CartDataService) {
    this.dataArray = cartDataService.sendData();
  }

  ngOnInit() {
    this.cartDataService.getJSON().subscribe(data => {
      this.dataArray = data.cartData;
      console.log('data received from CartDataService');
    });
  }

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
