import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  allPujasName;
  desiredPujaName: any[];
  serviceForm;
  constructor(private fb: FormBuilder,private router:Router, private dataService: DataService,private toastr: ToastrService) {
    this.serviceForm = fb.group({
      pujaMode: ['', [Validators.required]],
      tirth: ['', [Validators.required]],
      desiredPuja: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.dataService.getDesiredPuja().subscribe((response) => {
      this.allPujasName = response;
    });
  }

  onSelectTirth(value) {
    this.desiredPujaName = this.allPujasName.filter(item => item.tirth.includes(value));
  }

  showPackages(event) {
    const values = this.serviceForm.value;
    if (this.serviceForm.valid) {
      // this.router.navigate(['poojan']);
      event.target.href="./poojan";
    }
    else {
      this.toastr.error('Please select all the required fields');
    }
  }

  checkValidity() {
    let valid :any= false;
    for (let obj in this.serviceForm.controls) {
      valid = this.serviceForm.controls[obj].valid ? true : () => { return false };
    };
    return valid;
  }
}
