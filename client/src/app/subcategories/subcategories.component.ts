import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SubcategoriesService, UtilsService } from '../shared';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.scss']
})
export class SubcategoriesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subcategoriasService: SubcategoriesService,
    private utils: UtilsService
  ) { }

  private cat: string;
  private sub: any;
  
  subcategories: Array<string> = [];

  ngOnInit() {

    this.utils.toTopscroll();
    this.utils.showHideBreadCrumb(this.router.url);
    this.sub = this.route.params.subscribe(params => {
          
          this.cat=params['cat_name'];
    });

    this.subcategoriasService.getAll(this.cat)
    .subscribe(subcategories => {
      this.subcategories = subcategories;
    });

  }

}
