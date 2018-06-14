import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',  
})
export class ActivateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
  ) { }

  private token: string;
  private sub: any;

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.token=params['token'];
    });

    this.userService.changeActivation(this.token)
    .subscribe(
      message => {
        this.router.navigateByUrl('/login')
        this.toastr.success('Bienvenid@ a ShoppingPocket!','Cuenta Activada')
      },
      err => {
        this.toastr.error('Ha ocurrido un error. El token es erroneo o cuenta ya activada','Oh vaya!')
      }
    );
    
  }

}
