import { Component, OnInit  } from '@angular/core';
import { Router, PRIMARY_OUTLET } from '@angular/router';
import { UtilsService, UserService } from '../shared';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private router: Router,
    private utils: UtilsService,
    private userService: UserService
  ) { }

  isAuthenticated: boolean;

  ngOnInit() {

    this.utils.showHideBreadCrumb(this.router.url);

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
    

    });
    
    if($(window).width()<768){
      $('.container-carrouselmulti').hide()
    }else{
      $('.container-carrouselmulti').show()
    }

    $( window ).resize(function() {
      if($(window).width()<768){
        $('.container-carrouselmulti').hide()
      }else{
        $('.container-carrouselmulti').show()
      }
    });

  }


}
