import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {
  accessories: Item[] = [
    { id: crypto.randomUUID(), name: "Black & Gold Bracelet ", pictures: ["assets/Black&GoldBracelet.png", "assets/Black&GoldBraceletSide.png"], price: 15, size: "One size fits all.", description: "Deep colored bracelet that adds that final shine.", quantity: 1, tag: Tag.ACCESSORY, addedToCart: false },
    { id: crypto.randomUUID(), name: "White & Gold Bracelet", pictures: ["assets/White&GoldBracelet.png", "assets/White&GoldBraceletSide.png"], price: 12, size: "One size fits all.", description: "Bright wrist wear to give you that complete glow.", quantity: 1, tag: Tag.ACCESSORY, addedToCart: false },
    { id: crypto.randomUUID(), name: "Vintage Sunglasses", pictures: ["assets/Sunglasses.png", "assets/SunglassesPack.png"], price: 30, size: "One size fits all.", description: "Shade blockers to keep you the unimportant out of your view.", quantity: 1, tag: Tag.ACCESSORY, addedToCart: false }
  ];

  constructor(private cartService: CartService) { }

  AddToCart(id: string) {
    let item = this.accessories.find(accessory => accessory.id == id);
    if (item != undefined) {
      this.cartService.AddToCart(item);
    }
  }

  GetAccessories() {
    return this.accessories;
  }

  GetAccessoriesById(id: string): Item {
    let accessory = this.accessories.find(accessory => accessory.id === id);

    if (accessory === undefined) {
      throw new TypeError("There is no accessories that matches the id: " + id);
    }
    return accessory;
  }

  GetAccessoriesByPriceFilter(prices: number[]) {
    let filteredAccessories: Item[] = [];

    this.accessories.forEach(function (accessory) {
      if (prices.length <= 0) {
        filteredAccessories.push(accessory);

      }

      else {
        prices.forEach(function (price) {
          if (accessory.price >= price && accessory.price <= price + 9) {
            filteredAccessories.push(accessory);
          }
        });
      }
    });

    return filteredAccessories;
  }

  RemoveFromCart(id: string) {
    let item = this.accessories.find(accessory => accessory.id == id);
    if (item != undefined) {
      this.cartService.RemoveFromCart(item.id, false);
    }
  }
}
