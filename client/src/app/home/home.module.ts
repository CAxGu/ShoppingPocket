import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';
import { MainCategoriesComponent} from '../maincategories/maincategories.component';
import { CollectionsComponent } from '../collections/collections.component';
import { MarketsComponent } from '../markets/markets.component';
import { BrandsComponent } from '../brands/brands.component';
import { ValuateditemsComponent } from '../valuateditems/valuateditems.component';
import { AgmCoreModule } from '@agm/core';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
  }
]);

@NgModule({
  imports: [
    homeRouting,
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'GOOGLE MAPS API KEY'
    })
  ],
  declarations: [
    HomeComponent,
    MainCategoriesComponent,
    ValuateditemsComponent,
    CollectionsComponent,
    MarketsComponent,
    BrandsComponent
  ]
})
export class HomeModule { }
