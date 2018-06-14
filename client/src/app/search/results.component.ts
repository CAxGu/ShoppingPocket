import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { SearchService,UtilsService, CartService } from '../shared';
import { ToastrService } from 'ngx-toastr';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
    private utils: UtilsService,
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  products: Array<string> = [];
  searchObj:any;
  nresults:any;
  busqueda:any;
  searchForm: FormGroup;

  ngOnInit() {
    this.utils.toTopscroll();

    this.searchObj=this.searchService.getDataSearch();
    if (this.searchObj !== undefined){
      $('#nofoundText').css('display','none');
      $('#nofound').css('display','none');
      $('#foundedtext').css('display','inherit');
      $('#results_list').css('display','inherit');
      this.products=this.searchObj;

      if($('#searchinput').val() != ""){
        this.busqueda=$('#searchinput').val();
      }

     
      this.nresults=this.products.length;

      if(this.nresults==0 || this.nresults==undefined){
        $('#nofound').css('display','inherit');
        this.router.navigateByUrl('search/noresult');
      }

    }else{
      $('#nofoundText').css('display','inherit');
      $('#nofound').css('display','inherit');
      $('#foundedtext').css('display','none');
      $('#results_list').css('display','none');
    }
  
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
