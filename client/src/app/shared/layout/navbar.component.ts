import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models'; 
import { UserService } from '../services';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'layout-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }


  currentUser: User;
 
  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  ngOnInit() {

    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    )

  }

  redirection(place){
    
    switch (place) {
      case 'maincat':
        this.scrollHome(place);
      break;
      case 'brands':
        this.scrollHome(place);
      break;
      case 'about':
        this.scrollHome(place);
      break;    
      default:
        break;
    }

  }


  scrollHome(place){
    if(this.router.url!='/'){
      this.router.navigateByUrl('/');
      $(document).ready(()=>{
        window.scrollTo(0,$('#'+place+'').offset().top);
      });
    }else{
      $('html, body').animate({
        scrollTop: $("#"+place+"").offset().top
      }, 500);
    }
  }

}
