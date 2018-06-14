import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../shared';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private utils: UtilsService
  ) { }

  ngOnInit() {
    this.utils.showHideBreadCrumb(this.router.url);
  }

}
