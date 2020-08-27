
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
          console.log(this.currentUser);
      });
  }

  ngOnInit() {
     
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.currentUserSubscription.unsubscribe();
  }
toogleBack(){
  document.getElementById('divshow2').style.display = 'block';
  document.getElementById('divshow').style.display = 'none';
}
 
  toggle() {
    document.getElementById('divshow').style.display = 'block';
    document.getElementById('divshow2').style.display = 'none';
  }
  logout() {
    this.authenticationService.logout();
  }
}
