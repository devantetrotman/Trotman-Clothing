import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class TShirtsService {
  tshirts: Item[] = [
    { id: crypto.randomUUID(), name: "Snoopy T-Shirt", pictures: ["assets/SnoopyShirt.png", "assets/SnoopyShirtBack.png"], price: 20, size: "Large", description: "Black tee with the iconic dog laying upon his roof.", quantity: 1, tag: Tag.SHIRT, addedToCart: false },
    { id: crypto.randomUUID(), name: "Navy Blue Nike T-Shirt", pictures: ["assets/SkyBlueChampionShirt.png", "assets/SkyBlueChampionShirt.png"], price: 30, size: "Small", description: "Simple and sleek shirt Nike logo.", quantity: 1, tag: Tag.SHIRT, addedToCart: false },
    { id: crypto.randomUUID(), name: "Sky Blue Champion T-Shirt", pictures: ["assets/SkyBlueChampionShirt.png", "assets/SkyBlueChampionShirtBack.png"], price: 35, size: "Extra Large", description: "A top a bright as the sky to give you the feel of a champion.", quantity: 1, tag: Tag.SHIRT, addedToCart: false },
    { id: crypto.randomUUID(), name: "Brown Pocket T-Shirt", pictures: ["assets/BrownPocketShirt.png", "assets/BrownPocketShirtBack.png"], price: 30, size: "Medium", description: "Plain tee with a utility pocket.", quantity: 1, tag: Tag.SHIRT, addedToCart: false }
  ];

  constructor(private cartService: CartService) { }

  isCollapsed: boolean = true;

  AddToCart(id: string) {
    let item = this.tshirts.find(shirt => shirt.id == id);
    if (item != undefined) {
      this.cartService.AddToCart(item);
    }
  }

  GetTShirts() {
    return this.tshirts;
  }

  GetTShirtById(id: string): Item {
    let tshirt = this.tshirts.find(tshirt => tshirt.id === id);

    if (tshirt === undefined) {
      throw new TypeError("There is no t-shirts that matches the id: " + id);
    }
    return tshirt;
  }

  GetTShirtsByPriceFilter(prices: number[]) {
    let filteredTShirts: Item[] = [];

    this.tshirts.forEach(function (tshirts) {
      if (prices.length <= 0) {
        filteredTShirts.push(tshirts);

      }

      else {
        prices.forEach(function (price) {
          if (tshirts.price >= price && tshirts.price <= price + 9) {
            filteredTShirts.push(tshirts);
          }
        });
      }
    });

    return filteredTShirts;
  }

  GetTShirtsBySizeFilter(sizes: string[]) {
    let filteredTShirts: Item[] = [];

    this.tshirts.forEach(function (tshirts) {
      if (sizes.length <= 0) {
        filteredTShirts.push(tshirts);

      }

      else {
        sizes.forEach(function (shirtSize) {
          if (tshirts.size == shirtSize) {
            filteredTShirts.push(tshirts);
          }
        });
      }
    });

    return filteredTShirts;
  }

  RemoveFromCart(id: string) {
    let item = this.tshirts.find(tshirt => tshirt.id == id);
    if (item != undefined) {
      this.cartService.RemoveFromCart(item.id, false);
    }
  }
}
