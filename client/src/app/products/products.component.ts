import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ProductsService, CartService, UtilsService } from '../shared';
import { BreadcrumbService} from 'ng5-breadcrumb';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService,
    private toastr: ToastrService,
    private breadcrumbService: BreadcrumbService,
    private utils: UtilsService
  ) { }

  private maincat: string;
  private cat: string;
  private subcat: string;
  private sub: any;
  private data:{};

  products: Array<string> = [];

  ngOnInit() {

    this.utils.toTopscroll();
    this.utils.showHideBreadCrumb(this.router.url);

    this.sub = this.route.params.subscribe(params => {
          this.subcat = params['subcat_name'];
          this.cat = params['cat_name'];
          this.maincat = params['maincat_name'];
          
    });

    this.data = {'maincat_name':this.maincat,'cat_name':this.cat,'subcat_name':this.subcat};

    this.productsService.getAll(JSON.stringify(this.data))
    .subscribe(products => {
      this.products = products;
    });

  }

  addtoCart(Product){

    let exist = this.cartService.existProduct(Product.EAN);
    if(exist){
      this.cartService.actualizeUds(Product.EAN,1);
      this.toastr.success('Articulo añadido a su carrito');

    }else{
      Product['uds']=1;
      this.cartService.addProduct(Product);
      this.toastr.success('Articulo añadido a su carrito');
    }

    this.router.navigateByUrl('/cart');
    
  }

}
