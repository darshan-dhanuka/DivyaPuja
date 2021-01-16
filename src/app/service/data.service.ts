import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pandit } from 'src/app/model/pandit-user';
import { stringify } from 'querystring';
import { pandit_catagory } from '../model/pandit_cat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentUserSubject: BehaviorSubject<Pandit>;
  public currentUser: Observable<Pandit>;
  public pCat: Observable<pandit_catagory[]>;

  apiURL = "https://service.divyapuja.com:3000";

public : any;
  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<Pandit>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }
  panditRegister(user: Pandit) {
    return this.http.post(`https://service.divyapuja.com:3000/pandit_register`, user);
  }

  public getPanditCat(){
    return this.http.get(`https://service.divyapuja.com:3000/pandit_cat`);
  }

  public addToCart(user,product_id){
    //backend api call // parameters are passed after comma (if more than one param then send as object like below)
    return this.http.post(`http://service.divyapuja.com:3000/add_to_cart`,{user:user,product_id:product_id});
  }

    // handler for error in URL 
    private handleError(error: any): Promise<any> { 
      return Promise.reject(error.message || error); 
    } 

    get_products(): Promise<any> { 
    return this.http 
      .post(this.apiURL + "/get_products", { 

      }) 
      .toPromise() 
      .catch(this.handleError); 
  }
}