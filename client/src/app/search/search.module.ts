import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule} from '../shared';
import { SearchComponent } from './search.component';
import { ResultsComponent } from './results.component';


const searchRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'search/resultsb1',
    component: SearchComponent
  },
  {
    path: 'search/resultsb2',
    component: SearchComponent
  },
  {
    path: 'search/noresult',
    component: SearchComponent
  }
]); 


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    searchRouting
  ],
  declarations: [SearchComponent, ResultsComponent]})
export class SearchModule { }
