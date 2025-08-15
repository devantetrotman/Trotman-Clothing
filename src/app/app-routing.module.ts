import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PantsComponent } from './pants/pants.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { FormConfirmationComponent } from './form-confirmation/form-confirmation.component';

const routes: Routes = [
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutFormComponent },
  { path: 'confirm', component: FormConfirmationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hoodies', component: HoodiesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pants', component: PantsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'tshirts', component: TshirtsComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
