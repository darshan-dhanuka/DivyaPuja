import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-astro-sign',
  templateUrl: './astro-sign.component.html',
  styleUrls: ['./astro-sign.component.css']
})
export class AstroSignComponent implements OnInit {
  public sign: string;
  public signData: string;
  public currentDate = new Date();
  public signArr: Array<any> = ['','aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricornius','aquarius','pisces'];
  myDate = new Date();
  date : string;

  constructor(private route: ActivatedRoute,private dataService: DataService,private datePipe: DatePipe) { 
    this.date = this.datePipe.transform(this.myDate, 'yyyyMMdd');
    console.log(this.date);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.sign = params.get('sign');
      });
    this.getMoonSign();
  }

  getMoonSign(){
    let index = this.signArr.indexOf(this.sign);
    console.log(index);
    this.dataService.getMoonSignData(index,this.date)
      .subscribe(
          data => {
              console.log(data);
          },
          error => {
              console.log(error);
          });
  }

}
