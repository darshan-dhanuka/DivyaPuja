import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-astro-sign',
  templateUrl: './astro-sign.component.html',
  styleUrls: ['./astro-sign.component.css']
})
export class AstroSignComponent implements OnInit {
  public sign: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sign = params.get('sign');
      });
  }


}
