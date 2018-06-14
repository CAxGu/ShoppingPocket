import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Errors , UserService , UtilsService } from '../shared';
import { ToastrService } from 'ngx-toastr';
declare var jquery:any;
declare var $ :any;

import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: FormGroup;


  public user;
  sub: any;
  credentials:any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private socialAuthService: AuthService,
    private utils: UtilsService
  ) { 
    this.authForm = this.fb.group({
      'email':[null, Validators.compose([Validators.required, Validators.email])],
      'password': [null,  Validators.compose([Validators.required, Validators.maxLength(30),Validators.minLength(8)])]
    });
  }

  ngOnInit() {

      this.utils.showHideBreadCrumb(this.router.url);

      this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;

      // Set a title for the page accordingly
      switch (this.authType){
        case 'login':
          this.title='Acceder';
        break;
        case 'social':
          this.title= 'Acceder';
        break;
        default:
          this.title = 'Registro';
      }

      // add form control for username if this is the register page
        if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
        this.authForm.get('username').setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(15)]);
      }
    });
  }

  submitForm() {
   /*  if(this.errors == {errors: {}}){
      $('#errorlist').css('display','inherit');
    } */

    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => {
        if(this.authType !== 'login'){
          this.userService.purgeAuth();//logout()
          this.returnHome();
          this.toastr.success('Porfavor revisa tu bandeja de email','Activa tu cuenta');
        }else{
          this.returnHome();
        }

      } ,
      err => {
        $('#errorlist').removeClass('noerrors');
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }


/*Social Login with AuthService angular2-social*/
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    this.authType='social';

    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.errors = new Errors();
    this.sub = this.socialAuthService.signIn(socialPlatformProvider).then(
      (data) => {
        this.user=data;
        //Regex to use the first part of email as username
        this.user.username = this.user.email.split(['@'][0])[0];
        this.user.password = '1234567890';
        this.credentials = this.user;
 
        this.userService
        .attemptAuth(this.authType, this.credentials)
        .subscribe(
          data => this.returnHome(),
          err => {
            this.errors = err;
          });
      }
    )
  }

  returnHome(){
    this.router.navigateByUrl('/').then(
      ()=>{window.scrollTo(0, 0)})
  }

}
