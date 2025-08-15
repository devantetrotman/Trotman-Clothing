import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class HoodiesService {
  hoodies: Item[] = [
    { id: crypto.randomUUID(), name: "Green Adidas Hoodie", pictures: ["assets/GreenAdidasHoodie.png", "assets/GreenAdidasHoodieBack.png"], price: 20, size: "Large", description: "Green hoodie with the camo logo printed on the front", quantity: 1, tag: Tag.HOODIE, addedToCart: false },
    { id: crypto.randomUUID(), name: "Red Zip Up Hoodie", pictures: ["assets/RedZipUpHoodie.png", "assets/RedZipUpHoodieBack.png"], price: 30, size: "Medium", description: "Plain red hood that zips up.", quantity: 1, tag: Tag.HOODIE, addedToCart: false },
    { id: crypto.randomUUID(), name: "Blue Nike Hoodie", pictures: ["assets/BlueNikeHoodie.png", "assets/BlueNikeHoodieBack.png"], price: 40, size: "Small", description: "Anniversary Nike hoodie with a specialized logo.", quantity: 1, tag: Tag.HOODIE, addedToCart: false },
    { id: crypto.randomUUID(), name: "Tan Puma Hoodie", pictures: ["assets/TanPumaHoodie.png", "assets/TanPumaHoodieBack.png"], price: 25, size: "Extra Large", description: "Stylish Puma hoodie with a rare look.", quantity: 1, tag: Tag.HOODIE, addedToCart: false }
  ];

  constructor(private cartService: CartService) { }

  AddToCart(id: string) {
    let item = this.hoodies.find(hoodie => hoodie.id == id);
    if (item != undefined) {
      this.cartService.AddToCart(item);
    }
  }

  GetHoodies() {
    return this.hoodies;
  }

  GetHoodieById(id: string): Item {
    let hoodie = this.hoodies.find(hoodie => hoodie.id === id);

    if (hoodie === undefined) {
      throw new TypeError("There is no hoodies that matches the id: " + id);
    }
    return hoodie;
  }

  GetHoodiesByPriceFilter(prices: number[]) {
    let filteredHoodies: Item[] = [];

    this.hoodies.forEach(function (hoodie) {
      if (prices.length <= 0) {
        filteredHoodies.push(hoodie);

      }

      else {
        prices.forEach(function (price) {
          if (hoodie.price >= price && hoodie.price <= price + 9) {
            filteredHoodies.push(hoodie);
          }
        });
      }
    });

    return filteredHoodies;
  }

  GetHoodiesBySizeFilter(sizes: string[]) {
    let filteredHoodies: Item[] = [];

    this.hoodies.forEach(function (hoodie) {
      if (sizes.length <= 0) {
        filteredHoodies.push(hoodie);

      }

      else {
        sizes.forEach(function (hoodieSize) {
          if (hoodie.size == hoodieSize) {
            filteredHoodies.push(hoodie);
          }
        });
      }
    });

    return filteredHoodies;
  }

  RemoveFromCart(id: string) {
    let item = this.hoodies.find(hoodie => hoodie.id == id);
    if (item != undefined) {
      this.cartService.RemoveFromCart(item.id, false);
    }
  }
}
