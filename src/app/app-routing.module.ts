import { LangingPageComponent } from './components/langing-page/langing-page.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { CheckoutDeleteAlertComponent } from './components/checkout-delete-alert/checkout-delete-alert.component';
 
import { CheckoutReviewComponent } from './components/checkout-review/checkout-review.component';
import { AddCreditcardComponent } from './components/add-creditcard/add-creditcard.component';
import { CheckoutBillingComponent } from './components/checkout-billing/checkout-billing.component';
 

import { CartEditFormComponent } from './components/cart-edit-form/cart-edit-form.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { BagsDetailsComponent } from './components/bags-details/bags-details.component';
import { HomeComponent } from './components/home/home.component';
import { ShopCategoryComponent } from './components/shop-category/shop-category.component';
import { StoreArrivalsComponent } from './components/store-arrivals/store-arrivals.component';
  import { CheckoutComponent } from './components/checkout/checkout.component';
// import { AppComponent } from './app.component';
import { BagsComponent } from './components/bags/bags.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartAddNewAddressComponent } from './components/cart-add-new-address/cart-add-new-address.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
 { path: '', component: HomeComponent, children: [
    { path: 'store-arrivals', component: StoreArrivalsComponent },
     { path: 'shoping', component: ShopCategoryComponent },

     
  ] },


    {path: 'bags', component: BagsComponent},
    { path: 'bags-details', component: BagsDetailsComponent },
      { path: 'bags-details/:id', component: BagsDetailsComponent },
    // { path:"cart-items', component: CartItemsComponent"},
    {
      path: "cart-items", component: CartItemsComponent
    },
  {
     path:"checkout", component: CheckoutComponent
  },
   
  {
    path:"cart-add-new-address", component: CartAddNewAddressComponent
  },
  {
    path:"cart-edit-address", component: CartEditFormComponent
  },
  {
    path:"billing-checkout", component: CheckoutBillingComponent
  },
  {
    path:"add-creditcard", component: AddCreditcardComponent
  },
  {
    path: "checkout-review", component: CheckoutReviewComponent
  },
  {
    path: "checkout-delete-alert", component: CheckoutDeleteAlertComponent
  },
  {
    path: "confirmation", component: ConfirmationComponent
  },
  {
  path: "landing-page", component: LangingPageComponent
}








     
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
 

exports: [RouterModule]
})
export class AppRoutingModule { }
