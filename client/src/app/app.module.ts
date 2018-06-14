import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {Ng5BreadcrumbModule , BreadcrumbService } from 'ng5-breadcrumb';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { CategoriesModule } from './categories/categories.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
import { ProductsModule } from './products/products.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { SearchModule } from './search/search.module';

import { 
  ApiService,
  AuthGuard,
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
  SharedModule,
  MainCategoriesService,
  BrandsService,
  CategoriesService,
  SubcategoriesService,
  UtilsService, 
  ProductsService,
  MarketsService,
  CartService,
  CheckoutService,
  JwtService,
  UserService,
  ProfileService,
  SearchService,
  DiscountService
} from './shared';

import { 
  AdminComponent,
  /* AdminpanelComponent, */
  AdminModule
} from './admin';

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("FACEBOOK ID PROVIDER")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("GOOGLE ID PROVIDER")
        },
      ]
  );
  return config;
}


const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    /* AdminpanelComponent */
  ],
  imports: [
    Ng5BreadcrumbModule,
    BrowserModule,
    HomeModule,
    ContactModule,
    CategoriesModule,
    SubcategoriesModule,
    ProductsModule,
    ProductDetailModule,
    AdminModule,
    ShoppingCartModule,
    rootRouting,
    SharedModule,
    HttpModule,
    HttpClientModule,
    AuthModule,
    ProfileModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,}
    ),
    NgbModule.forRoot(),
    SocialLoginModule,
    SearchModule
  ],
  providers: [
    AuthGuard,
    JwtService,
    ApiService,
    MainCategoriesService,
    CategoriesService,
    SubcategoriesService,
    ProductsService,
    BrandsService,
    BreadcrumbService,
    CartService,
    MarketsService,
    CheckoutService,
    UserService,
    ProfileService,
    UtilsService,
    SearchService,
    DiscountService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
