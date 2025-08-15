import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items = {} as Item[];
  @Input() item = {} as Item;
  cartTotal: number = 0;
  displayStyle = "";
  disabled = "";

  constructor(private titleService: Title, private cartService: CartService) {
    this.titleService.setTitle("Trotman Clothing - Cart")
  }
  ngOnInit(): void {
    this.items = this.cartService.GetCart();
    this.GetCartTotal()
  }

  GetCartTotal(): number {
    this.cartTotal = this.cartService.GetCartTotal();

    if (this.cartTotal == 0) {
      this.displayStyle = "display:inline"
      this.disabled = "display:none"
    }
    else {
      this.displayStyle = "display:none"
      this.disabled = "display:inline"
    }

    return this.cartTotal;
  }

  MinusSignClicked(item: Item) {
    if (item.quantity > 1) {
      this.cartService.RemoveFromCart(item.id, false);
      this.GetCartTotal();
    }
  }

  PlusSignClicked(item: Item) {
    this.cartService.AddToCart(item);
    this.GetCartTotal();
  }

  RemoveFromCart(item: Item) {
    if (item.quantity == 1) {
      this.item.addedToCart = false;
    }
    this.cartService.RemoveFromCart(item.id, true);
    this.GetCartTotal();
  }

}
