import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { pandit_catagory } from '../model/pandit_cat';

import { DataService } from '../service/data.service';
import { User } from '../model/user';
import {AlertService} from '../service/alert.service';
import { ImageServiceService } from '../service/image-service.service';
import { HttpClient } from '@angular/common/http';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-astro-form',
  templateUrl: './astro-form.component.html',
  styleUrls: ['./astro-form.component.css']
})
export class AstroFormComponent implements OnInit {
  public panditCat: any[];
  panditForm: FormGroup;
  loading = false;
  submitted = false;
  selectedFile: ImageSnippet;
  photo_url : any = "";
  
  constructor(
    private formBuilder: FormBuilder,
      private router: Router,
      private dataService: DataService,
      private alertService: AlertService,
      private imageService: ImageServiceService,
      private http: HttpClient
  ) { 
   
  }


  
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
      pandit_cat: ['', Validators.required]  ,
      about: ['', Validators.required],
      photo_url:[''],
      whatsapp:['', Validators.required],
      franchise:['', Validators.required],
      reseller:['', Validators.required],
      retailer:['', Validators.required],
      seller:['', Validators.required],
    });
   
}

getCat(){
 this.dataService.getPanditCat().subscribe((data)=>{
      console.log(data);
      this.panditCat = data["data"];
  
    });

}

private onSuccess(id) {
  this.selectedFile.pending = false;
  this.selectedFile.status = 'ok';
  this.photo_url = id;
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
        this.onSuccess(res.data.id);
      //  this.photo_url = res.id
      
      },
      (err) => {
        this.onError();
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
      alert("Something wrong");
      return;
  }
  if (this.photo_url == "") {
    alert("No photo found . Please upload again");
    return false;
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




