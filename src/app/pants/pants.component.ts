import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Item } from '../models/Item';
import { PantsService } from '../_services/pants.service';

@Component({
  selector: 'app-pants',
  standalone: false,
  
  templateUrl: './pants.component.html',
  styleUrl: './pants.component.css'
})
export class PantsComponent implements OnInit{

  items = {} as Item[];

  isCollapsed: boolean = true;
  filtering: boolean = false;
  size3434: boolean = false;
  size3432: boolean = false;
  size3634: boolean = false;
  size3832: boolean = false;
  price3039: boolean = false;
  price4049: boolean = false;
  price5059: boolean = false;

  constructor(private titleService: Title, private pantsService: PantsService) {
    this.titleService.setTitle("Trotman Clothing - Pants")
  }
  ngOnInit(): void {
    this.items = this.pantsService.GetPants();
  }

  FilterByPrice() {
    let filterTags: number[] = [];

    if (this.price3039) {
      this.filtering = true;
      filterTags.push(30)
    }

    if (this.price4049) {
      this.filtering = true;
      filterTags.push(40)
    }

    if (this.price5059) {
      this.filtering = true;
      filterTags.push(50)
    }

    else {
      this.filtering = false;
    }
    this.items = this.pantsService.GetPantsByPriceFilter(filterTags);
  }

  FilterBySize() {
    let filterTags: string[] = [];

    if (this.size3434) {
      this.filtering = true;
      filterTags.push("34x34")
    }

    if (this.size3432) {
      this.filtering = true;
      filterTags.push("34x32")
    }

    if (this.size3634) {
      this.filtering = true;
      filterTags.push("36x34")
    }

    if (this.size3832) {
      this.filtering = true;
      filterTags.push("38x32")
    }

    else {
      this.filtering = false;
    }
    this.items = this.pantsService.GetPantsBySizeFilter(filterTags);
  }

  ResetFilters() {
    this.size3432 = false;
    this.size3434 = false;
    this.size3634 = false;
    this.size3832 = false;
    this.filtering = false;
    this.price3039 = false;
    this.price4049 = false;
    this.price5059 = false;
    this.items = this.pantsService.GetPants();
  }

}
