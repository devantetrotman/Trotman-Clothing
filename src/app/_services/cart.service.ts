import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { HeaderComponent } from '../header/header.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Item[] = [];
  cartTotal: number = 0;

  constructor() { }

  AddToCart(item: Item) {
    if (!this.cart.includes(item)) {
      this.cart.push(item);
      this.cartTotal += item.price;
    }
    else if (this.cart.includes(item)) {
      let item = this.cart.find(x => x.id == item.id);
      if (item !== undefined) {
        item.quantity++;
        this.cartTotal += item.price;
      }
    }
  }

  GetCart() {
    return this.cart;
  }

  GetCartTotal(): number {
    if (this.cart.length < 1) {
      this.cartTotal = 0;
    }
    return this.cartTotal;
  }

  RemoveFromCart(id: string, isRemoveBtn: boolean): Item[] {
    let itemIndex = this.cart.findIndex(x => x.id == id);
    let item = this.cart[itemIndex];
    switch (isRemoveBtn) {
      case false:
        item.quantity--;
        this.cartTotal -= item.price;
        break;
      case true:
        item.quantity = 1;
        this.cart.splice(itemIndex, 1);
        this.cartTotal -= item.price;
        item.addedToCart = false;
        break;
      default:
        break;
    }
    return this.cart;
  }
}
