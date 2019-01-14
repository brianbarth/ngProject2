import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Cart } from './cart-items/cart.interface';


const fsCollectionName = 'cartData'

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cart = this.db.collection<Cart>(fsCollectionName);

  constructor(private db: AngularFirestore) { }

  getCartData$() {
    return this.cart.valueChanges()
  }

  addToCart(cartItem: Cart) {
    const newId = new Date().toISOString();

    const newItem: Cart = {
      ...cartItem,
      id: newId
    }

    this.cart.doc(newId).set(newItem)
  }

  removeFromCart(cartItem: Cart) {
    this.cart.doc(cartItem.id).delete();
  }

}


