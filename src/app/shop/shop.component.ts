import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PantsService } from '../_services/pants.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  constructor(private titleService: Title, private pantsService: PantsService) {
    this.titleService.setTitle("Trotman Clothing")
  }
}
