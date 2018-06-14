import { Component, OnInit } from '@angular/core';
/* import { Router } from '@angular/router'; */

import { MainCategoriesService } from '../shared';

@Component({
  selector: 'app-maincategories',
  templateUrl: './maincategories.component.html',
  styleUrls: ['./maincategories.component.scss']
})
export class MainCategoriesComponent implements OnInit {

  constructor(
/*     private router: Router, */
    private maincategoriasService: MainCategoriesService,
  ) { }

  maincategories: Array<string> = [];

  ngOnInit() {

    this.maincategoriasService.getAll()
    .subscribe(maincategories => {
      this.maincategories = maincategories;
    });
  }

}
