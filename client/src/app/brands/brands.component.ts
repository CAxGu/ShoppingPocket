import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BrandsService } from '../shared';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(
    private router: Router,
    private brandService: BrandsService
  ) { }

  brands: Array<string> = [];

  ngOnInit() {
    this.brandService.getAllBrands()
    .subscribe(brands => {
      this.brands = brands;
    });
  }
}

