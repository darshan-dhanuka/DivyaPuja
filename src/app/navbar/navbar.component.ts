import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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

 
  toggle() {
    document.getElementById('divshow2').style.display = 'block';
  }
  logout() {
    this.authenticationService.logout();
  }
  
}
