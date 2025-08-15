import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PantsComponent } from './pants/pants.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ItemCardComponent } from './item-card/item-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ItemModalComponent } from './item-modal/item-modal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { FormConfirmationComponent } from './form-confirmation/form-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PantsComponent,
    AboutComponent,
    ContactComponent,
    ItemCardComponent,
    ItemModalComponent,
    HoodiesComponent,
    TshirtsComponent,
    AccessoriesComponent,
    ShopComponent,
    CartComponent,
    CartPopupComponent,
    CheckoutFormComponent,
    FormConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropDownListModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
