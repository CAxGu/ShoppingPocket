import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';

import { NoAuthGuard } from './no-auth-guard.service';
import { SharedModule } from '../shared';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivateComponent } from './activate.component';
import { RecoverpassComponent } from './recoverpass.component';
import { ChangepasswordrecoveryComponent } from './changepasswordrecovery.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path:'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
    {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }, 
  {
    path: 'recover',
    component: RecoverpassComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'changepassword/:token/:email',
    component: ChangepasswordrecoveryComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'activation/:token',
    component: ActivateComponent,
    canActivate: [NoAuthGuard]
  }
]);


@NgModule({
  imports: [
    CommonModule,
    authRouting,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AuthComponent,
    ActivateComponent,
    RecoverpassComponent,
    ChangepasswordrecoveryComponent,
/*     SendPasswordRecoveryComponent,
    ChangePasswordRecoveryComponent,*/
  ],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule { }
