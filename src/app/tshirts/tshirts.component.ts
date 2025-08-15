import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { TShirtsService } from '../_services/tshirts.service';

@Component({
  selector: 'app-tshirts',
  standalone: false,

  templateUrl: './tshirts.component.html',
  styleUrl: './tshirts.component.css'
})
export class TshirtsComponent {

  items = {} as Item[];

  isCollapsed: boolean = true;
  filtering: boolean = false;
  small: boolean = false;
  medium: boolean = false;
  large: boolean = false;
  extraLarge: boolean = false;
  price2029: boolean = false;
  price3039: boolean = false;

  constructor(private titleService: Title, private tshirtsService: TShirtsService) {
    this.titleService.setTitle("Trotman Clothing - T-Shirts")
  }
  ngOnInit(): void {
    this.items = this.tshirtsService.GetTShirts();
  }

  FilterByPrice() {
    let filterTags: number[] = [];

    if (this.price2029) {
      this.filtering = true;
      filterTags.push(20)
    }

    if (this.price3039) {
      this.filtering = true;
      filterTags.push(30)
    }

    else {
      this.filtering = false;
    }
    this.items = this.tshirtsService.GetTShirtsByPriceFilter(filterTags);
  }


  FilterBySize() {
    let filterTags: string[] = [];

    if (this.small) {
      this.filtering = true;
      filterTags.push("Small")
    }

    if (this.medium) {
      this.filtering = true;
      filterTags.push("Medium")
    }

    if (this.large) {
      this.filtering = true;
      filterTags.push("Large")
    }

    if (this.extraLarge) {
      this.filtering = true;
      filterTags.push("Extra Large")
    }

    else {
      this.filtering = false;
    }
    this.items = this.tshirtsService.GetTShirtsBySizeFilter(filterTags);
  }

  ResetFilters() {
    this.small = false;
    this.medium = false;
    this.large = false;
    this.extraLarge = false;
    this.filtering = false;
    this.price3039 = false;
    this.price2029 = false;
    this.items = this.tshirtsService.GetTShirts();
  }
}
