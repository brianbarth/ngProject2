import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartDataService } from './cart-data.service';
import { Scramble } from './shared/scramble.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartItemsComponent,
    Scramble
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
