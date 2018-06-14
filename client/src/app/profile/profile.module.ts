import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileResolver } from './profile-resolver.service';
import { SharedModule } from '../shared';
import { ModaldetailsComponent } from './modaldetails.component';


const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolver
    },
    children: [
      {
        path: '',
        component:ProfileFavoritesComponent
      }
    ]
  }
  ]);

@NgModule({
  imports: [
    CommonModule,
    profileRouting,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileFavoritesComponent,
    ModaldetailsComponent
  ],

  providers:[
    ProfileResolver
  ]
})
export class ProfileModule { }
