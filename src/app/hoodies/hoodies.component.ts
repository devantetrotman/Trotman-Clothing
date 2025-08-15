import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from '../models/Item';
import { HoodiesService } from '../_services/hoodies.service';

@Component({
  selector: 'app-hoodies',
  standalone: false,
  
  templateUrl: './hoodies.component.html',
  styleUrl: './hoodies.component.css'
})
export class HoodiesComponent {

  items = {} as Item[];

  isCollapsed: boolean = true;
  filtering: boolean = false;
  small: boolean = false;
  medium: boolean = false;
  large: boolean = false;
  extraLarge: boolean = false;
  price3039: boolean = false;
  price4049: boolean = false;
  price2029: boolean = false;

  constructor(private titleService: Title, private hoodiesService: HoodiesService) {
    this.titleService.setTitle("Trotman Clothing - Hoodies")
  }
  ngOnInit(): void {
    this.items = this.hoodiesService.GetHoodies();
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

    if (this.price4049) {
      this.filtering = true;
      filterTags.push(40)
    }

    else {
      this.filtering = false;
    }
    this.items = this.hoodiesService.GetHoodiesByPriceFilter(filterTags);
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
    this.items = this.hoodiesService.GetHoodiesBySizeFilter(filterTags);
  }

  ResetFilters() {
    this.small = false;
    this.medium = false;
    this.large = false;
    this.extraLarge = false;
    this.filtering = false;
    this.price3039 = false;
    this.price4049 = false;
    this.price2029 = false;
    this.items = this.hoodiesService.GetHoodies();
  }

}
