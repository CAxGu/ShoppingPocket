import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';

@Injectable()
export class ContactService {

  constructor(
   private apiService: ApiService
   ) {}
   
   sendgrid(data): Observable<JSON> {
    return this.apiService.post('/contact/sendmail',{data: data})
   }

}