import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { DataService } from '../service/data.service';
import { User } from '../model/user';
import {AlertService} from '../service/alert.service';
import { UserService } from '../service/user.service';
import { ImageServiceService } from '../service/image-service.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-pandit-form',
  templateUrl: './pandit-form.component.html',
  styleUrls: ['./pandit-form.component.css']
})
export class PanditFormComponent implements OnInit {
  panditForm: FormGroup;
  loading = false;
  submitted = false;
  selectedFile: ImageSnippet;
 
  constructor(
    private formBuilder: FormBuilder,
      private router: Router,
      private dataService: DataService,
      private alertService: AlertService,
      private imageService: ImageServiceService,
  ) { }
// pandit_name, email_id, mobile_num ,address ,city,dob ,languages_known ,experience, , pathshala_name, pandit_cat, about ,photo_url
  ngOnInit() {
    this.panditForm = this.formBuilder.group({
      pandit_name: ['', Validators.required],
      email_id: ['', Validators.required],
      mobile_num: ['', Validators.required],
      address: ['', [Validators.required]],
      city: ['', Validators.required],
      dob: ['', Validators.required],
      languages_known: ['', Validators.required],
      experience: ['', Validators.required],
      adhar_num: ['', Validators.required],
      pathshala_name: ['', Validators.required],
      pandit_cat: ['', Validators.required],
      about: ['', Validators.required],
      photo_url: ['', Validators.required],
      
    });
  
}
private onSuccess() {
  this.selectedFile.pending = false;
  this.selectedFile.status = 'ok';
}

private onError() {
  this.selectedFile.pending = false;
  this.selectedFile.status = 'fail';
  this.selectedFile.src = '';
}
processFile(imageInput: any) {
  const file: File = imageInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', (event: any) => {

    this.selectedFile = new ImageSnippet(event.target.result, file);

    this.imageService.uploadImage(this.selectedFile.file).subscribe(
      (res) => {
        console.log(res)
      //  this.photo_url = res.id
      
      },
      (err) => {
      
      })
  });

  reader.readAsDataURL(file);
}


 // convenience getter for easy access to form fields
 get f() { return this.panditForm.controls; }


 Submit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.panditForm.invalid) {
      return;
  }

  this.loading = true;
  
  this.dataService.panditRegister(this.panditForm.value)
      .pipe(first())
      .subscribe(
          data => {
              this.alertService.success('Registration successful', true);
              window.location.reload();
              this.router.navigate(["/home"]);
              // document.getElementById('divshow2').style.display = 'none';

          },
          error => {
              //this.alertService.error(error);
              this.loading = false;
          });
}

}



