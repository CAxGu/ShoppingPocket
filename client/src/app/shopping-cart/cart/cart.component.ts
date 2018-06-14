import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {User, CartService, UserService, UtilsService, DiscountService } from '../../shared'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UserService,
    private utils: UtilsService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private discoutService: DiscountService
  ) {
    this.discountForm = this.fb.group({
      'discountCode':[null, Validators.compose([Validators.required,Validators.minLength(16)])]
    })
   }

  totaldiscount=0;
  discountApply=false;
  isSubmitting = false;
  discountForm: FormGroup; 
  currentUser:User;
  productssize:Number;
  private productCart:Array<string>;

  ngOnInit() {

    this.utils.toTopscroll();
    this.utils.showHideBreadCrumb(this.router.url);

    let cartSession = localStorage.getItem("cart");

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );    

    if(cartSession != null){
      this.cartService.products = JSON.parse(cartSession);
    }else{
      this.productssize = 0;
    }

  }


   submitForm() {
     let datasubmit=this.discountForm.value;
     datasubmit.usermail=this.currentUser.email;

    this.discoutService.applyDiscount(this.discountForm.value)
    .subscribe(
      data => {
           switch (data.resolution) {
            case "ok":
                this.toastr.success('Descuento aplicado correctamente');
                this.discountApply=true;
                this.totaldiscount=this.calculateDiscount(data.result,this.getTotal());
                this.discoutService.transferDiscount(this.totaldiscount);
              break;
            case "used":
                this.toastr.warning('El código introducido ya ha sido utilizado');
              break;
            default:
                this.toastr.error('El código introducido no existe');
              break;
           }
      },
      err => {
        this.toastr.error('Ha habido algun problema por favor intentelo mas tarde');
      }
    );
   }


  products(): string[] {
    return this.cartService.products;
  }


  calculateDiscount(discount,total){
    let discountAmmount=discount.ammount; 
    let totaldiscount = total/(1+(discountAmmount/100));
    
    return Math.round(totaldiscount*100)/100;
  }


  percentDiscounted(totalnoIva,discount){
    return Math.round((totalnoIva-discount)*100)/100;
  }


  removeProduct(Product){
    return this.cartService.removeProduct(Product)
  }

  getTotal() :number{
    return this.cartService.getTotal()
  }

  goBack(){
      window.history.back();
  }

  getProductsSize(){
    if(this.productssize == 0){
      this.productssize =  0;
    }else{
      this.productssize = this.productssize;
    }
    
  }


  getActualUds(Product){
    return this.cartService.numberOfItems(Product.EAN);
  }


  addUds(Product){
    this.cartService.addUds(Product);
    this.getTotal();
  }

  removeUds(Product){
    this.cartService.removeUds(Product);
    this.getTotal();
  }


  getTotalItem(Product){
    return this.cartService.getTotalItem(Product);
  }

  getTotalcart(){
    return this.cartService.getTotal();
  }

  getIVA(TotalCart){
    return Math.round((TotalCart * 0.21) * 100) / 100 
  }

  getTotalIVA(TotalCart,IVA){
    if(this.totaldiscount!=0  && this.totaldiscount!=undefined){
      return Math.round((this.totaldiscount+ IVA) * 100) / 100;
    }else{
      return Math.round((TotalCart + IVA) * 100) / 100;
    }
  }

  clear(){
    let clearwindow = window.confirm("¿Está seguro de querer vaciar el carrito?");
      if(clearwindow){
        this.cartService.removeAll(); 
      } 
  }

}
