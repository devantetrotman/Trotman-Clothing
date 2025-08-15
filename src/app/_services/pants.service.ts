import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class PantsService {
  pants: Item[] = [
    { id: crypto.randomUUID(), name: "Slim Blue Jeans", pictures: ["assets/SlimFitBlueJeans.png", "assets/SlimFitBlueJeansBack.png"], price: 40, size: "34x34", description: "Blue jeans fitted to your size.", quantity: 1, tag: Tag.PANTS, addedToCart: false },
    { id: crypto.randomUUID(), name: "Tapered Black Jeans", pictures: ["assets/TaperedBlackJeans.png", "assets/TaperedBlackJeansBack.png"], price: 30, size: "36x34", description: "Tapered black jeans to cap off your style.", quantity: 1, tag: Tag.PANTS, addedToCart: false },
    { id: crypto.randomUUID(), name: "Straight Fit Blue Jeans", pictures: ["assets/StraightFitBlueJeans.png", "assets/StraightFitBlueJeansBack.png"], price: 50, size: "34x32", description: "Blue Straight jeans with a finish for the ages.", quantity: 1, tag: Tag.PANTS, addedToCart: false },
    { id: crypto.randomUUID(), name: "Straight Fit Grey Jeans", pictures: ["assets/StraightFitGreyJeans.png", "assets/StraightFitGreyJeans.png"], price: 35, size: "38x32", description: "Straight fit jeans for comfort, but still look good. ", quantity: 1, tag: Tag.PANTS, addedToCart: false }
  ];

  constructor(private cartService: CartService) { }

  AddToCart(id: string) {
    let item = this.pants.find(pant => pant.id == id);
    if (item != undefined) {
      this.cartService.AddToCart(item);
    }
  }

  GetPants() {
    return this.pants;
  }

  GetPantsById(id: string): Item {
    let jeans = this.pants.find(pants => pants.id === id);

    if (jeans === undefined) {
      throw new TypeError("There is no pants that matches the id: " + id);
    }
    return jeans;
  }

  GetPantsByPriceFilter(prices: number[]) {
    let filteredPants: Item[] = [];

    this.pants.forEach(function (jeans) {
      if (prices.length <= 0) {
        filteredPants.push(jeans);

      }

      else {
        prices.forEach(function (price) {
          if (jeans.price >= price && jeans.price <= price + 9) {
            filteredPants.push(jeans);
          }
        });
      }
    });

    return filteredPants;
  }

  GetPantsBySizeFilter(sizes: string[]) {
    let filteredPants: Item[] = [];

    this.pants.forEach(function (jeans) {
      if (sizes.length <= 0) {
        filteredPants.push(jeans);
      }

      else {
        sizes.forEach(function (pantSize) {
          if (jeans.size == pantSize) {
            filteredPants.push(jeans);
          }
        });
      }
    });

    return filteredPants;
  }

  RemoveFromCart(id: string) {
    let item = this.pants.find(pants => pants.id == id);
    if (item != undefined) {
      this.cartService.RemoveFromCart(item.id, false);
    }
  }
}
