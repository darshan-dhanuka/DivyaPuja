import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { first } from 'rxjs/operators';
import { ProductService } from '../service/product.service';
import { BehavioralSubjectService } from '../service/behavioral-subject.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  cartLength: any;

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private productService: ProductService,
    private behavioralSubjectService: BehavioralSubjectService,
    
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

  ngOnInit() {
    this.behavioralSubjectService.isClickEvent.subscribe(res => {
      if (res === 'addCart') {
        this.cartDetails('11');
        this.behavioralSubjectService.isEvent.next('');
      }
      else{
        this.cartDetails('11');
      }
    });

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
  cartDetails(user_id) {
    const userId = { user_id: '11' }
    this.productService.getCartDetails(userId).subscribe((data) => {
      this.cartLength = data["data"]["cart_items"].length;
      console.log(data);
    });
  }

}
