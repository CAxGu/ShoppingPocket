import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Profile } from '../models';

@Injectable()
export class ProfileService {

  constructor(
    private apiService: ApiService
  ) { }


  public dataModal: Array<string> = [];


  get(username: string): Observable<Profile> {
    return this.apiService.get('/profiles/' + username)
          .map((data: {profile: Profile}) => data.profile);
  }

  getPurchases(email: string): Observable<[string]>  {
    console.log(email);
    return this.apiService.post('/purchases/' + email)
        .map(data => data);
  }

/*   sendDatatoModal(datatoModal){
    this.storeDatatoModal(datatoModal)
              .subscribe(dataModal => {
              this.dataModal = dataModal;
            })
  } */

  getPurchaseItems(purchase):Observable<[string]>{  
    return this.apiService.post('/purchases/purchase/' + JSON.stringify(purchase))
    .map(data => data);
  }

}
