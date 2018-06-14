import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { ErrorsComponent } from './errors.component';
import { ShowAuthedDirective } from './show-authed.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ErrorsComponent,
    ShowAuthedDirective,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ShowAuthedDirective,
    FormsModule,
    ErrorsComponent
  ]
})
export class SharedModule { }
