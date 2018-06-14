import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component'
import { RouterModule } from '@angular/router';
import { ContactService } from '../shared';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { FormBuilder,FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const contactRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'contact',
    component: ContactComponent,
  }
]);

@NgModule({
  imports: [
    CommonModule,
    contactRouting,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ContactComponent
  ],
  providers:[
   ContactService
  ]
})
export class ContactModule { }

