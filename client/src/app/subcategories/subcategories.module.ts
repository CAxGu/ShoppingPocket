import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoriesComponent } from './subcategories.component';
import { SubcategoriesService } from '../shared';
import { RouterModule } from '@angular/router';


const subcategoriesRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'categ/:maincat_name/:cat_name',
    component: SubcategoriesComponent,
  }
]);

@NgModule({
  imports: [
    CommonModule,
    subcategoriesRouting
  ],
  declarations: [
    SubcategoriesComponent
  ],
  providers:[
    SubcategoriesService
  ]
})
export class SubcategoriesModule { }
