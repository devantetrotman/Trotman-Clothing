import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Item } from '../models/Item';
import { TShirtsService } from '../_services/tshirts.service';
import { AccessoriesService } from '../_services/accessories.service';
import { HoodiesService } from '../_services/hoodies.service';
import { Tag } from '../models/Tag';
import { PantsService } from '../_services/pants.service';

@Component({
  selector: 'app-item-modal',
  standalone: false,
  
  templateUrl: './item-modal.component.html',
  styleUrl: './item-modal.component.css'
})
export class ItemModalComponent {
  item = {} as Item;
  btnColor: string = "btn-primary";

  constructor(public bsModalRef: BsModalRef, private tShirtsService: TShirtsService, private accessoriesService: AccessoriesService, private hoodiesService: HoodiesService, private pantsService: PantsService) {

  }

  AddToCart() {
    if (this.item.tag == Tag.PANTS) {
      this.pantsService.AddToCart(this.item.id)
    }
    if (this.item.tag == Tag.SHIRT) {
      this.tShirtsService.AddToCart(this.item.id)
    }
    if (this.item.tag == Tag.ACCESSORY) {
      this.accessoriesService.AddToCart(this.item.id)
    }
    if (this.item.tag == Tag.HOODIE) {
      this.hoodiesService.AddToCart(this.item.id)
    }
    this.item.addedToCart = true
    this.ChangeBtnColor();
  }

  ChangeBtnColor() {
    if (this.item.addedToCart) {
      this.btnColor = "btn-secondary"
    }
    else {
      this.btnColor = "btn-primary"
    }
  }
}
