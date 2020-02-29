import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { StorageService } from "./services/storage.service";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HomeMenuComponent } from "./home-menu/home-menu.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ShippingComponent } from "./shipping/shipping.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { IndexComponent } from "./index/index.component";
import { SearchComponent } from "./search/search.component";
import { SellPageComponent } from "./sell-page/sell-page.component";
import { PreviewimgComponent } from "./previewimg/previewimg.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    IndexComponent,
    HomeMenuComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ShippingComponent,
    CartComponent,
    ProductDetailsComponent,
    SearchComponent,
    SellPageComponent,
    PreviewimgComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "products", component: ProductListComponent },
      { path: "sell", component: SellPageComponent },
      {
        path: "products/detail/:productId",
        component: ProductDetailsComponent
      },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "login", component: LoginComponent }
    ])
  ],
  providers: [StorageService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
//
// RouterModule.forRoot([
//   { path: "", component: IndexComponent },
//   { path: "products", component: ProductListComponent },
//   { path: "sell", component: SellPageComponent },
//   {
//     path: "products/detail/:productId",
//     component: ProductDetailsComponent
//   },
//   { path: "cart", component: CartComponent },
//   { path: "shipping", component: ShippingComponent },
//   { path: "login", component: LoginComponent }
// ])
