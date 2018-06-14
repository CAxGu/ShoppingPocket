import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Errors , UserService , UtilsService } from '../shared';
import { ToastrService } from 'ngx-toastr';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-changepasswordrecovery',
  templateUrl: './changepasswordrecovery.component.html',
  styleUrls: ['./auth.component.scss']
})

export class ChangepasswordrecoveryComponent implements OnInit {
  errors: Errors = {errors: {}};
  isSubmitting = false;
  changeForm: FormGroup;
  credentials:any;
  private sub: any;
  private token: any;
  private email: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private utils: UtilsService
  ) { 
    this.changeForm = this.fb.group({
      'password': [null,  Validators.compose([Validators.required, Validators.maxLength(30),Validators.minLength(8)])]
    });
  }

  ngOnInit() {
    $('#breadcrumb').hide();

    this.sub = this.route.params.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];
    });
  }

  submitForm() {

    this.isSubmitting = false;
    this.errors = {errors: {}};

    const credentials = this.changeForm.value;
    credentials['token']=this.token;
    credentials['email']=this.email;

    this.userService.changePasswordRecover(credentials)
    .subscribe(
      data => {
        this.toLogin();
        this.toastr.success('Contraseña cambiada correctamente');
      } ,
      err => {
        $('#errorlist').removeClass('noerrors');
        this.errors = err;
        this.toastr.error('Ha habido algun problema por favor intentelo mas tarde')
        this.isSubmitting = false;
      }
    );
  }
  
  toLogin(){
    this.router.navigateByUrl('/login').then(
      ()=>{window.scrollTo(0, 0)});
  }
}