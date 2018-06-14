import { Component, OnInit } from '@angular/core';

/*import {  AdminService } from '../shared';*/
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../shared';
import { first } from 'rxjs/operators';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss']
})
export class AdminpanelComponent implements OnInit {

  constructor(
    private router: Router,
    private utils: UtilsService
  ) {}


  ngOnInit() {
    
  this.utils.showHideBreadCrumb(this.router.url);

  /* Changing focused item in our navigation list */
    $( '.sidenav ul li' ).on( 'click', function() {
      $( this ).parent().find( 'a.active' ).removeClass( 'active' );
      $( this ).find( 'a' ).addClass( 'active' );
    });

  /*Display or hide subfamilies contained in the menu list selected */
    $('#catalog').click(function(){
      $('#catalog-list').toggleClass('li-show');
    });
  }
}
