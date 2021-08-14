import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poojan',
  templateUrl: './poojan.component.html',
  styleUrls: ['./poojan.component.css']
})
export class PoojanComponent implements OnInit {
  loading=true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loading=false;
    },3000)
  }

}
