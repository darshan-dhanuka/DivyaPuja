import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-poojan',
  templateUrl: './poojan.component.html',
  styleUrls: ['./poojan.component.css']
})
export class PoojanComponent implements OnInit,OnDestroy {
  loading = true;
  subscription:Subscription;
  packageDetails:any=[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.subscription = this.dataService.getPackages().subscribe(packages => {
        if(packages!=null){
          packages.forEach(element => {
            element['pujaDesc']=element['pujaDesc'].split('/n');
          });        
        this.packageDetails=packages;
        console.log(packages);
        }
      })
      this.loading = false;
    }, 3000)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
