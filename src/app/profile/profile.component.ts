import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  productList : any [];
  id:any="";
  first_name:any="";
  last_name:any="";
  email:any="";

  constructor(private dataService :DataService) { }

  ngOnInit(): void {

    this.setUserData();
  }
  setUserData() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    this.id = user.user.id;
    this.first_name = user.user.name;
    this.last_name = "";
    this.email = user.user.email;

  }
}
