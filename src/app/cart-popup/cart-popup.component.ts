import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-popup',
  standalone: false,
  
  templateUrl: './cart-popup.component.html',
  styleUrl: './cart-popup.component.css'
})
export class CartPopupComponent {
  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;

    setTimeout(() => {
      this.isPopupVisible = false;
    }, 3000); // 3 seconds
  }
}
