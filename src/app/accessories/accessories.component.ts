import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from '../models/Item';
import { Tag } from '../models/Tag';
import { AccessoriesService } from '../_services/accessories.service';

@Component({
  selector: 'app-accessories',
  standalone: false,
  
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})

export class AccessoriesComponent {

  items = {} as Item[];

  isCollapsed: boolean = true;
  filtering: boolean = false;
  extraLarge: boolean = false;
  price0010: boolean = false;
  price1120: boolean = false;
  price2130: boolean = false;

  constructor(private titleService: Title, private accessoriesService: AccessoriesService) {
    this.titleService.setTitle("Trotman Clothing - Accessories")
  }
  ngOnInit(): void {
    this.items = this.accessoriesService.GetAccessories();
  }

  FilterByPrice() {
    let filterTags: number[] = [];

    if (this.price0010) {
      this.filtering = true;
      filterTags.push(0)
    }

    if (this.price1120) {
      this.filtering = true;
      filterTags.push(11)
    }

    if (this.price2130) {
      this.filtering = true;
      filterTags.push(21)
    }

    else {
      this.filtering = false;
    }
    this.items = this.accessoriesService.GetAccessoriesByPriceFilter(filterTags);
  }

  ResetFilters() {
    this.extraLarge = false;
    this.filtering = false;
    this.price0010 = false;
    this.price1120 = false;
    this.price2130 = false;
    this.items = this.accessoriesService.GetAccessories();
  }
}
