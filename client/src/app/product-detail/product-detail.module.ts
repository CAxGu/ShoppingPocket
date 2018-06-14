import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { SubcategoriesService } from '../shared';
import { RouterModule } from '@angular/router';


const productdetailsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    /* path: 'mcat/:idmaincat/cat/:idcat/subcat/:subcat/p/:idprod', */
    path: 'categ/:maincat_name/:cat_name/:subcat_name/:idprod',
    component: ProductDetailComponent,
  },
  {
    path: 'search/resultsb2/:idprod',
    component: ProductDetailComponent,
  },
  {
    path: 'search/resultsb1/:idprod',
    component: ProductDetailComponent,
  }
]);

@NgModule({
  imports: [
    CommonModule,
    productdetailsRouting    
  ],
  declarations: [
    ProductDetailComponent
  ],
  providers:[
    SubcategoriesService
  ]
})
export class ProductDetailModule { }
