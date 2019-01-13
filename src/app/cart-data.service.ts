import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  public cartData$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.cartData$ = db.collection('cartData').valueChanges();
   }

  sendData() {
    return this.cartData$;
  }
}
