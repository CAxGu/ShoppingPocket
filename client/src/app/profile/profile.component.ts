import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { User, UserService, Profile, UtilsService } from '../shared';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private utils: UtilsService
  ) { }

  profile: Profile;
  currentUser: User;
  isUser: boolean;

  ngOnInit() {

    this.utils.showHideBreadCrumb(this.router.url);

    this.route.data.subscribe(
      (data: {profile: Profile}) => {
        this.profile = data.profile;
        // Load the current user's data.
        this.userService.currentUser.subscribe(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        );
      }
    );

  }

}
