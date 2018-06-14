import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutService, CartService, User, UserService, UtilsService, DiscountService } from '../../shared'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  currentUser: User;
  message: string;
  isSubmitting = false;
  checkoutForm: FormGroup;
  totaldiscount=0;

  constructor(
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private utils: UtilsService,
    private userService: UserService,
    private discountService: DiscountService

  ) { 
    this.checkoutForm = this.fb.group({
    'clientName':[null, Validators.compose([Validators.required, Validators.maxLength(30),Validators.minLength(2)])],
    'clientLastname':[null, Validators.compose([Validators.required, Validators.maxLength(30),Validators.minLength(2)])],
    'clientDNI':[null, Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
    'clientAdress':[null, Validators.compose([Validators.required, Validators.minLength(2)])],
    'clientAdressNumber':[null, Validators.compose([Validators.required, Validators.maxLength(5), Validators.minLength(2)])],
    'clientAdressCity':[null, Validators.compose([Validators.required, Validators.minLength(2)])],
    'clientAdressLocate':[null, Validators.compose([Validators.required, Validators.minLength(2)])],
    'clientCP':[null, Validators.compose([Validators.required, Validators.maxLength(5), Validators.minLength(2)])],
    'clientMail':[null, Validators.compose([Validators.required, Validators.email])],
    'clientPhone':[null, Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
    'titularName':[null, Validators.compose([Validators.required, Validators.maxLength(30),Validators.minLength(2)])],
    'cardNumber':[null, Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(16)])],
    'expiryMonth':[null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2)])],
    'expiryYear':[null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(2)])],
    'cvc':[null, Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(3)])],
  }) }


  ngOnInit() {

    this.utils.toTopscroll();
    $('#loader').hide(); 
    $('#paymentmessage').hide();     
    this.utils.showHideBreadCrumb(this.router.url);

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
      }
    );
    
    this.totaldiscount=this.discountService.checkoutDiscount();
  }

  getTotalcart(Products){
    return this.cartService.getTotalCheckout(Products);
  }

  getIVA(TotalCart){
    return Math.round((TotalCart * 0.21) * 100) / 100 
  }

  getTotalIVA(TotalCart,IVA){
    if(this.totaldiscount!=0 && this.totaldiscount!=undefined){
      return Math.round((this.totaldiscount + IVA) * 100) / 100;
    }else{
      return Math.round((TotalCart + IVA) * 100) / 100;
    } 
  }

  getToken(){

  this.utils.toTopscroll();
  $('#loader').show();
  $('#paymentmessage').hide();  

  (<any>window).Stripe.card.createToken({
      number: this.checkoutForm.value.cardNumber,
      exp_month: this.checkoutForm.value.expiryMonth,
      exp_year: this.checkoutForm.value.expiryYear,
      cvc: this.checkoutForm.value.cvc
    }, (status: number, response: any) => {
      if(status === 200) {
        let cartContent = this.cartService.getProducts();
        let totalnoIva = this.getTotalcart(cartContent);
        let ivaCart = this.getIVA(totalnoIva);
        let totalNoDiscount = Math.round((totalnoIva + ivaCart) * 100) / 100;
        let TOTAL = this.getTotalIVA(totalnoIva,ivaCart);
        let data = {stripeToken: response.id, 
          cart: cartContent, 
          currentusermail:this.currentUser.email, 
          totalNoDiscount:totalNoDiscount,
          totalCart: TOTAL, 
          infoUser:{
            clientName: this.checkoutForm.value.clientName,
            clientLastname: this.checkoutForm.value.clientLastname,
            clientDNI: this.checkoutForm.value.clientDNI,
            clientAdress: this.checkoutForm.value.clientAdress,
            clientAdressNumber: this.checkoutForm.value.clientAdressNumber,
            clientAdressCity: this.checkoutForm.value.clientAdressCity,
            clientAdressLocate: this.checkoutForm.value.clientAdressLocate,
            clientCP: this.checkoutForm.value.clientCP,
            clientMail: this.checkoutForm.value.clientMail,
            clientPhone: this.checkoutForm.value.clientPhone,
        }};
        this.checkoutService.checkout(data).subscribe(
          message => {
            this.cartService.removeAll();
            this.toastr.success('El pago se ha efectuado correctamente. Revise su correo para ver ver su pedido');
            this.router.navigateByUrl('/').then(()=>this.utils.toTopscroll());
          },
          err => {
            this.toastr.error('Ha habido algun problema por favor intentelo mas tarde');
            this.router.navigateByUrl('/cart');
          }
        );
      } else{
        setTimeout($('#loader').hide(),4400);    
        setTimeout($('#paymentmessage').show(),4500);      
        this.message = response.error.message;
      } 
    });
  }
}
