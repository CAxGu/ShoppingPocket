import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class CategoriesService {

  constructor (
    private apiService: ApiService
  ) {}

  getAll(catname:string): Observable<[string]> {
    return this.apiService.get('/categories/'+catname+'/')
           .map(data => data);
  }
}
