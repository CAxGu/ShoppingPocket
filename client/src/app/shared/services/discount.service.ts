import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class DiscountService {

  totalDiscount:any;

  constructor(
    private apiService: ApiService
  ) { }

  applyDiscount(data): Observable<any>{

    return this.apiService.post('/discounts/',{data:data});
  }

  transferDiscount(data){
    this.totalDiscount=data;
  }

  checkoutDiscount(){
    return this.totalDiscount;   
  }
}
