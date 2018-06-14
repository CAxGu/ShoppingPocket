import { Component, OnInit } from '@angular/core';
/* import { CartService } from '../services/cart.service'; */
import { SearchService , CartService} from '../services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isSubmitting = false;
  searchForm: FormGroup;
  search='';


  constructor(
    private cartService: CartService,
    private searchService: SearchService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      'search':[null, Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(1)])]
    })
   }

  itemsOnCart:string;

  ngOnInit() {


    $('#searchinput').keypress((e)=>{
      if(e.which == 13) {
        $('#formSearch').submit(this.searchService.submitSearch(this.searchForm));
      }
    });

    $('#buttonsearch').click(()=>{
       $('#formSearch').submit(this.searchService.submitSearch(this.searchForm));
    });

  }

  itemsCart(){
    this.itemsOnCart = this.cartService.totalOfCartItems();
    if(this.itemsOnCart=='0'){
      this.itemsOnCart='Vacío';
    }

    return this.itemsOnCart;
  }

}
