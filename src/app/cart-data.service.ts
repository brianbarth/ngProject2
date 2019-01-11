import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cartData: string[];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log('data loaded from file: "data.json"');
    });
   }

   public getJSON(): Observable<any> {
    return this.http.get('/assets/data.json');
   }

  sendData(){
    return this.cartData;
  }
}
// cartData = [
//   'bananas',
//   'peaches',
//   'blueberries',
//   'watermelon',
//   'strawberries',
//   'kiwi',
//   'pears',
//   'grapes',
//   'figs',
//   'dates',
//   'papaya'
// ];
