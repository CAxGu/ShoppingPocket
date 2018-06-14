import { Injectable } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Injectable()
export class UtilsService {

  constructor() { }


  showHideBreadCrumb(url){
    if(url == '/' || url == '/login' ||  url == '/register' || 
    url == '/social' || url == '/contact' || url == '/search/resultsb1' || 
    url == '/search/resultsb2'||  url == '/search/noresult'){
      $('#breadcrumb').hide();
    }else{
      $('#breadcrumb').show();
    }
  }

  
  toTopscroll(){
    window.scrollTo(0,0);
  }

}
