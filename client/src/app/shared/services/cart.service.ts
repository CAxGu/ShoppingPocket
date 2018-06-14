import { Injectable } from '@angular/core';
/* import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch' */

@Injectable()
export class CartService {

  constructor() { }

  products: string[] = [];


  getProducts(){
    let cartProd;

    if(localStorage.getItem("cart")){
      cartProd = localStorage.getItem("cart");
    }else {
      cartProd = this.products;
    }

    return JSON.parse(cartProd);
  }


  addProduct(product:string){
    this.products.push(product);
    localStorage.setItem("cart",JSON.stringify(this.products));
  }

  removeProduct(Product){
    this.products.splice(this.products.indexOf(Product), 1)
    localStorage.setItem("cart",JSON.stringify(this.products));
    
    if(this.products.length==0){
      location.reload();
      localStorage.removeItem('cart');
    }
  }


  totalOfCartItems(){
    let ProdsCart = JSON.parse(localStorage.getItem('cart'));
    let uds=0;

    if(ProdsCart){
      ProdsCart.forEach(function(prod){
        uds+=prod.uds;
      })
    }

    return uds.toString();
  }


  numberOfItems(Product_ean){
    let ProdsCart = JSON.parse(localStorage.getItem('cart'));
    let uds;

        ProdsCart.forEach((product)=>{
          if(product['EAN'] == Product_ean){
            uds=product.uds
          }
        });

    return uds;
  }


  getTotal() :number{
    let total = 0; 
    
    this.products.forEach(product => {
      total += this.getTotalItem(product)
    })
    return Math.round(total * 100) / 100;
  }


  getTotalCheckout(Products) :number{
    let total = 0; 
    
    Products.forEach(product => {
      total += this.getTotalItem(product)
    })
    return Math.round(total * 100) / 100;
  }


  setTotal(TotalCart){
    let cartProd = this.getProducts();
    cartProd['totalCart']=TotalCart;
    this.products=cartProd;
    localStorage.setItem("cart",JSON.stringify(this.products));
  }


  getTotalItem(Product):number{
    let total = 0; 
    total = Product['prize']*Product['uds'];

    return Math.round(total * 100) / 100;;
  }

  removeAll(){
    this.products = [];
    location.reload();
    localStorage.removeItem('cart');
  }


  addUds(Product){
    this.products[this.products.indexOf(Product)]['uds']=this.products[this.products.indexOf(Product)]['uds']+1;
    localStorage.setItem("cart",JSON.stringify(this.products));
  }

  removeUds(Product){
    let udsProduct = this.products[this.products.indexOf(Product)]['uds'];

    if(udsProduct -1 == 0){
      this.removeProduct(Product);
    }else{
      this.products[this.products.indexOf(Product)]['uds']=this.products[this.products.indexOf(Product)]['uds']-1;
      localStorage.setItem("cart",JSON.stringify(this.products));
    }

  }

  actualizeUds(Product_ean,uds){

    let ProdsCart = JSON.parse(localStorage.getItem('cart'));

    ProdsCart.forEach((product)=>{
      if(product['EAN'] == Product_ean){
        product['uds']+=uds;

        this.products=ProdsCart;

        localStorage.setItem("cart",JSON.stringify(this.products));
      }
    })

  }


  existProduct(EAN_PROD){
    let exist = false;

    if(localStorage.getItem("cart")){

      let cart=JSON.parse(localStorage.getItem("cart"));

      cart.forEach(function(product){
        if(product.EAN == EAN_PROD){
          exist = true;
        }else{
          exist =  false;
        }
      })
    } else {
        exist = false;
    }
    return exist;
  }

}
