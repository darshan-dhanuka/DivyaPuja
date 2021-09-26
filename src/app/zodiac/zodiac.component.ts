import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zodiac',
  templateUrl: './zodiac.component.html',
  styleUrls: ['./zodiac.component.css']
})
export class ZodiacComponent implements OnInit {
  todaysDate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
