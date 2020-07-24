import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  togglefp() {
    document.getElementById('divshow2').style.display = 'none';
    document.getElementById('divfp').style.display = 'block';
  }
}
