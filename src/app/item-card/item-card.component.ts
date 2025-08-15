import { Component, Input } from '@angular/core';
import { Item } from '../models/Item';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ItemModalComponent } from '../item-modal/item-modal.component';
import { Tag } from '../models/Tag';
import { PantsService } from '../_services/pants.service';
import { AccessoriesService } from '../_services/accessories.service';
import { HoodiesService } from '../_services/hoodies.service';
import { TShirtsService } from '../_services/tshirts.service';

@Component({
  selector: 'app-item-card',
  standalone: false,
  
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input() item = {} as Item;
  bsModalRef?: BsModalRef;
  btnColor: string = "btn-primary";

  constructor(private modalService: BsModalService, private pantsService: PantsService,
    private tShirtsService: TShirtsService, private accessoriesService: AccessoriesService, private hoodiesService: HoodiesService) {

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

  OpenItemModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        item: this.item

      }
    };
    this.bsModalRef = this.modalService.show(ItemModalComponent, modalOptions);
  }
}
