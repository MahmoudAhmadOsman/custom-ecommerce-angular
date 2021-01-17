import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
 import { StoreArrivalsComponent } from './components/store-arrivals/store-arrivals.component';
import { ShopCategoryComponent } from './components/shop-category/shop-category.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { BagsComponent } from './components/bags/bags.component';
import { HomeComponent } from './components/home/home.component';
import { BagsDetailsComponent } from './components/bags-details/bags-details.component';
import { BagsModalComponent } from './components/bags-modal/bags-modal.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartAddNewAddressComponent } from './components/cart-add-new-address/cart-add-new-address.component';
import { CartEditFormComponent } from './components/cart-edit-form/cart-edit-form.component';
import { CheckoutBillingComponent } from './components/checkout-billing/checkout-billing.component';
import { AddCreditcardComponent } from './components/add-creditcard/add-creditcard.component';
import { CheckoutReviewComponent } from './components/checkout-review/checkout-review.component';
 
import { CheckoutDeleteAlertComponent } from './components/checkout-delete-alert/checkout-delete-alert.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeSearchComponent,
     StoreArrivalsComponent,
    ShopCategoryComponent,
    SubscribeComponent,
    BagsComponent,
    HomeComponent,
    BagsDetailsComponent,
    BagsModalComponent,
    CartItemsComponent,
    CheckoutComponent,
    CartAddNewAddressComponent,
    CartEditFormComponent,
    CheckoutBillingComponent,
    AddCreditcardComponent,
    CheckoutReviewComponent,
     
    CheckoutDeleteAlertComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
