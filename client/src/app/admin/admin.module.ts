import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin-login/admin.component';
/* import { AdminPanelModule} from './admin-panel'; */
import { AdminpanelComponent }  from './admin-panel/adminpanel.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { FormBuilder,FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import {
  CatpanelComponent
} from './admin-panel/catpanel';

const adminRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'adminsp',
    component: AdminComponent,
  },
  {
    path: 'adminsp-panel',
    component: AdminpanelComponent,
  }  

]);

@NgModule({
  imports: [
    CommonModule,
    adminRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    AdminpanelComponent,
    CatpanelComponent
  ]
})
export class AdminModule { }
