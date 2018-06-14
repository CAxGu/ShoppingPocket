import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class SubcategoriesService {

  constructor(
    private apiService: ApiService
  ) { }

  getAll(subcatname:string): Observable<[string]> {
    return this.apiService.get('/subcategories/'+subcatname+'/')
           .map(data => data);
  }
}
