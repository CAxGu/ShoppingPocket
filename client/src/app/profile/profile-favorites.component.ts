import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {User,UserService,Profile,ProfileService } from '../shared';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-profile-favorites',
  templateUrl: './profile-favorites.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileFavoritesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private profileService: ProfileService
  ) { }

  currentUser:User;
  currentPurchase={};
  profile: Profile;
  purchases: Array<string> = [];
  dataPurchase:Array<any> = [];
  /* favoritesConfig: ArticleListConfig = new ArticleListConfig(); */

    ngOnInit() {
      this.route.parent.data.subscribe(
        (data: {profile: Profile}) => {
          this.profile = data.profile;
          /* this.favoritesConfig.filters.favorited = this.profile.username; */
        }
      );

      this.userService.currentUser.subscribe(
        (userData: User) => {
          this.currentUser = userData;    
        }
      );

      if( this.currentUser!=undefined || Object.keys( this.currentUser).length !== 0 && this.currentUser.constructor === Object ){
        this.profileService.getPurchases( this.currentUser.email)
          .subscribe(purchases => {
          this.purchases = purchases;

          this.purchases.forEach((purchase,index) =>{
            this.profileService.getPurchaseItems(purchase)
              .subscribe(dataPurchase => {
                let data = {date_purchase:purchase['date_purchase'],purchase:dataPurchase};
              this.dataPurchase.push(data);
            });

          })
        });
      }      
    }
    
    toggleInfo(idelement){
      let id= idelement;
      $('div#data_'+id+'').toggle();
    }
}