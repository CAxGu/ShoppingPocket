import { Component, OnInit } from '@angular/core';

import { /* AdminService, */ Errors} from '../../shared';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  errors: Errors = new Errors()
  isSubmitting = false;
  adminForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    /* private adminService: AdminService */
  ) { 
    this.adminForm = this.fb.group({
      'email':[null, Validators.compose([Validators.required, Validators.email])],
      'password':[null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])]
    })
  }

  ngOnInit() {
  }


  submitForm() {
    console.log("SUBMIT ADMIN");
    this.router.navigateByUrl('/adminsp-panel');
  }

}
