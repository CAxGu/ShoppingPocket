import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng5-breadcrumb';
import { UserService } from './shared';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
    
  constructor(
    private breadcrumbService: BreadcrumbService,
    private userService: UserService
  ) {}

  ngOnInit() {

    this.breadcrumbService.hideRoute('/categ');
    this.breadcrumbService.hideRoute('/profile');
    this.userService.populate();

    window.onscroll = function(){
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $("#gotopBtn").css("display","block");
      } else {
        $("#gotopBtn").css("display","none");
     }};

     /*When the user clicks on the button, scroll to the top of the document*/
     $('#gotopBtn').on("click",()=>{
       window.scrollTo(0,0);
     })

     if($(window).width()<768){
      $("#gotopBtn").css("display","block");
    }else{
      $("#gotopBtn").css("display","block");
    }

    $( window ).resize(function() {
      if($(window).width()<768){
        $("#gotopBtn").css("display","block");
      }else{
        $("#gotopBtn").css("display","block");
      }
    });
  }

}
