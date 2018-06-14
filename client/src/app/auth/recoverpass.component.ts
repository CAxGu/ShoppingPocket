import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Errors , UserService , UtilsService } from '../shared';
import { ToastrService } from 'ngx-toastr';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.component.html',
  styleUrls: ['./auth.component.scss']
})
export class RecoverpassComponent implements OnInit {
  errors: Errors = {errors: {}};
  isSubmitting = false;
  recoverForm: FormGroup;
  credentials:any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private utils: UtilsService
  ) { 
    this.recoverForm = this.fb.group({
      'email':[null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {
    $('#breadcrumb').hide();
  }

  submitForm() {

    this.isSubmitting = false;
    this.errors = {errors: {}};

    const credentials = this.recoverForm.value;
    credentials['originurl']=window.location.origin;

   this.userService.sendPasswordRecovery(credentials)
    .subscribe(
      data => {
        this.returnHome();
        this.toastr.success('Revise su bandeja de entrada','Petición enviada');
      } ,
      err => {
        $('#errorlist').removeClass('noerrors');
        this.errors = err;
        this.toastr.error('Ha habido algun problema por favor intentelo mas tarde')
        this.isSubmitting = false;
      }
    );
  }

  returnHome(){
    this.router.navigateByUrl('/').then(
      ()=>{window.scrollTo(0, 0)});
  }
}