import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsService } from '../shared';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const productsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'categ/:maincat_name/:cat_name/:subcat_name',
    component: ProductsComponent,
  }
]);

@NgModule({
  imports: [
    CommonModule,
    productsRouting
  ],
  declarations: [
    ProductsComponent
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { }
