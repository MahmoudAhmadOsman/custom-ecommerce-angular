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
    CartItemsComponent
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
