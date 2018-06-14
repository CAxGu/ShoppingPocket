import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategoriesService, UtilsService } from '../shared';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriasService: CategoriesService,
    private utils: UtilsService
  ) { }

  private maincat: string;
  private sub: any;
  
  maincategories: Array<string> = [];
  categories: Array<string> = [];

  ngOnInit() {

    this.utils.toTopscroll();
    this.utils.showHideBreadCrumb(this.router.url);
    
    this.sub = this.route.params.subscribe(params => {
          this.maincat=params['maincat_name'];
    });

    this.categoriasService.getAll(this.maincat)
      .subscribe(categories => {
         this.categories = categories;
    });

  }

}
