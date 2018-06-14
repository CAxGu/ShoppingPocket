import { Component, Input } from '@angular/core';

import { Errors } from './models';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html'
})
export class ErrorsComponent {

  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = Object.keys(errorList.errors || {})
      .map(key => `${errorList.errors[key]}`);
  }

  get errorList() { return this.formattedErrors; }

}