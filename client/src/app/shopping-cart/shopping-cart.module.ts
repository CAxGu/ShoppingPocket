import { NgModule,  ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared';
import { FormBuilder,FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
/* import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; */


const shoppingcartRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'cart/checkout',
    component: CheckoutComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    shoppingcartRouting,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  /*   BrowserAnimationsModule,
    ToastrModule.forRoot(), */
  ],
  declarations: [
    CheckoutComponent,
    CartComponent,
  ]
})
export class ShoppingCartModule { }
