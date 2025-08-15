import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-checkout-form',
  standalone: false,
  
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent {
  inputFirstName: string = "";
  inputLastName: string = "";
  inputEmail: string = "";
  inputAddress: string = "";
  inputAptNumber: string = "";
  inputCity: string = "";
  inputState: string = "";
  inputZipCode: string = "";
  inputCardNumber: string = "";
  inputExpDate: string = "";
  inputCcvCode: string = "";
  fieldsRequiredDisplay = "display:none";
  cartTotal: number = 0;
  inputs = [this.inputAddress, this.inputAptNumber, this.inputCardNumber, this.inputCcvCode, this.inputCity, this.inputExpDate, this.inputEmail, this.inputFirstName, this.inputLastName, this.inputState, this.inputZipCode];

  //firstNameDisplay = "display:none";
  //lastNameDisplay = "display:none";
  //emailDisplay = "display:none";
  //addressDisplay = "display:none";
  //aptNumberDisplay = "display:none";
  //cityDisplay = "display:none";
  //stateDisplay = "display:none";
  //zipCodeDisplay = "display:none";
  //cardNumberDisplay = "display:none";
  //expDateDisplay = "display:none";
  //ccvCodeDisplay = "display:none";
  constructor(private router: Router, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartTotal = this.cartService.GetCartTotal();
  }

  //InputCheck() {
  //  if (this.inputFirstName == "") {
  //    this.firstNameDisplay = "display:inline"
  //  }
  //  if (this.inputLastName == "") {
  //    this.lastNameDisplay = "display:inline"
  //  }
  //  if (this.inputEmail == "") {
  //    this.emailDisplay = "display:inline"
  //  }
  //  if (this.inputAddress == "") {
  //    this.addressDisplay = "display:inline"
  //  }
  //  if (this.inputAptNumber == "") {
  //    this.aptNumberDisplay = "display:inline"
  //  }
  //  if (this.inputCity == "") {
  //    this.cityDisplay = "display:inline"
  //  }
  //  if (this.inputState == "") {
  //    this.stateDisplay = "display:inline"
  //  }
  //  if (this.inputZipCode == "") {
  //    this.zipCodeDisplay = "display:inline"
  //  }
  //  if (this.inputCardNumber == "") {
  //    this.cardNumberDisplay = "display:inline"
  //  }
  //  if (this.inputExpDate == "") {
  //    this.expDateDisplay = "display:inline"
  //  }
  //  if (this.inputCcvCode == "") {
  //    this.ccvCodeDisplay = "display:inline"
  //  }
  //}

  Checkout() {
    this.router.navigate(['/confirm']);
  }
}
