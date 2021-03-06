import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {  AuthenticationService } from '../service/authentication.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
  }
  toggleclose() {
    //console.log();
    //window.location.reload();
    //this.router.navigate(["/home"]);
    document.getElementById('divshow2').style.display = 'none';

  }
  togglereg() {
   // window.location.reload();
     document.getElementById('login_div').style.display = 'none';
     document.getElementById('divreg').style.display = 'block';
    
  }
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
     
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                window.location.reload();
                  this.router.navigateByUrl("home");
              },
               error => {
                //document.getElementById('loader_show').style.display = 'none';
                //console.log(error, "Incorrect code entered?");
                      if(error['message'])
                      {
                        alert(error['message']);
                      }
               });
           
            
            }
        }
