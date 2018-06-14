import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService, Errors, UtilsService} from '../shared';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  errors: Errors = new Errors()
  isSubmitting = false;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private contactService: ContactService,
    private toastr: ToastrService,
    private utils: UtilsService,
  ) {
    this.contactForm = this.fb.group({
      'name':[null, Validators.compose([Validators.required, Validators.maxLength(25),Validators.minLength(3)])],
      'email':[null, Validators.compose([Validators.required, Validators.email])],
      'subject':[null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])],
      'message':[null, Validators.compose([Validators.required, Validators.maxLength(481), Validators.minLength(3)])]
    })
   }

  ngOnInit() {
    this.utils.showHideBreadCrumb(this.router.url);
  }


  submitForm() {
    this.errors = new Errors();
    this.contactService.sendgrid(this.contactForm.value)
    .subscribe(
      message => {
        this.router.navigateByUrl('/')
        this.toastr.success('El email se ha enviado correctamente')
      },
      err => {
        this.errors = err;
        this.toastr.error('Ha habido algun problema por favor intentelo mas tarde')
        this.isSubmitting = false;
      }
    );
  }

}
