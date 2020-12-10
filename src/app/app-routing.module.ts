import { HomeComponent } from './components/home/home.component';
import { ShopCategoryComponent } from './components/shop-category/shop-category.component';
import { StoreArrivalsComponent } from './components/store-arrivals/store-arrivals.component';
import { AppComponent } from './app.component';
import { BagsComponent } from './components/bags/bags.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //  { path: '', component: AppComponent },
 { path: '', component: HomeComponent, children: [
    { path: 'store-arrivals', component: StoreArrivalsComponent },
     { path: 'shoping', component: ShopCategoryComponent },
  ] },

 
    { path: 'bags', component: BagsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
