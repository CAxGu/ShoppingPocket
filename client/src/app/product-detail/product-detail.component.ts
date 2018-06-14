import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { ProductsService, CartService, UtilsService } from '../shared';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartService: CartService,
    private toastr: ToastrService,
    private utils: UtilsService
  ) { }

  private idprod: string;
  private sub: any;
  
  product_uds:number =1;
  product: {};
  

  ngOnInit() {

    this.utils.toTopscroll();
    this.utils.showHideBreadCrumb(this.router.url);
    
    this.sub = this.route.params.subscribe(params => {
      this.idprod = params['idprod'];
    });

    this.productsService.getProduct(this.idprod)
      .subscribe(product => {
         this.product = product[0];
    });


    $('#udsProduct').keypress((e)=>{
      if(e.which == 13) {
        let value = this.getInputUdsValue();
        this.setInputUdsValue(value);
      }
    })

    this.getInputUdsValue();
  }

  addtoCart(Product){

    let exist = this.cartService.existProduct(Product.EAN);
    if(exist){
      this.cartService.actualizeUds(Product.EAN,this.product_uds);
      this.toastr.success('Articulo añadido a su carrito');

    }else{
      Product['uds']=this.product_uds;
      this.cartService.addProduct(Product);
      this.toastr.success('Articulo añadido a su carrito');
    }

    this.router.navigateByUrl('/cart');
    
  }


  getInputUdsValue(){
    this.product_uds=Number.parseInt($('#udsProduct').val());    
    
    return this.product_uds;
  }

  setInputUdsValue(value){
    this.product_uds=Number.parseInt(value);    
    $("#udsProduct").val(value);
  }


  getTotal() :number{
    return this.cartService.getTotal();
  }


  addUds(){
    let actualUds= this.getInputUdsValue();
    let actualizeUds = actualUds+1;

    this.setInputUdsValue(actualizeUds);
  }

  removeUds(){
    let actualUds= this.getInputUdsValue();
    let actualizeUds = 1;

    if(actualUds!=1){
      actualizeUds= actualUds-1;
      this.setInputUdsValue(actualizeUds);
    }
  }

}
