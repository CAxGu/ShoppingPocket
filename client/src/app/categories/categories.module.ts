import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from '../shared';
import { RouterModule } from '@angular/router';


const categoriesRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'categ/:maincat_name',
    component: CategoriesComponent,
  }
]);

@NgModule({
  imports: [
    CommonModule,
    categoriesRouting
  ],
  declarations: [
    CategoriesComponent,
  ],
  providers:[
    CategoriesService
  ]
})
export class CategoriesModule { }
