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
  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService, private toastr: ToastrService) {
    this.serviceForm = fb.group({
      pujaMode: ['', [Validators.required]],
      tirth: ['', [Validators.required]],
      desiredPuja: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  onSelectTirth(value) {
    this.dataService.getDesiredPuja(value).subscribe((response) => {
      this.allPujasName = response;
      this.desiredPujaName = this.allPujasName.package_details;
    });
  }

  showPackages(event) {
    const values = this.serviceForm.value;
    if (this.serviceForm.valid) {      
      const packages_details=this.allPujasName.package_details.filter(item=>item.puja==values.desiredPuja)[0];
      this.dataService.addPackages(packages_details.package);
      // event.target.href = "./poojan";
      this.router.navigate(['poojan']);
    }
    else {
      this.toastr.error('Please select all the required fields');
    }
  }

  checkValidity() {
    let valid: any = false;
    for (let obj in this.serviceForm.controls) {
      valid = this.serviceForm.controls[obj].valid ? true : () => { return false };
    };
    return valid;
  }
}
