import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainCategoriesService } from '../../../shared';
import { first } from 'rxjs/operators';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-catpanel',
  templateUrl: './catpanel.component.html',
  styleUrls: ['./catpanel.component.scss']
})
export class CatpanelComponent implements OnInit {

  constructor(
    private router: Router,
    private categoriasService: MainCategoriesService
  ) { }

  maincategories: Array<string> = [];

  ngOnInit() {

    this.categoriasService.getAll()
    .subscribe(maincategories => {
      this.maincategories = maincategories;
    });
    
  }

}
