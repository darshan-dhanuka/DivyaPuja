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
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentUserSubject: BehaviorSubject<Pandit>;
  public currentUser: Observable<Pandit>;
  public pCat: Observable<pandit_catagory[]>;
  private selectedPackages: BehaviorSubject<any>;

  apiURL = "https://service.divyapuja.com:3000";

  public: any;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Pandit>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.selectedPackages = new BehaviorSubject<any>(null);
  }


  panditRegister(user: Pandit) {
    return this.http.post(this.apiURL + `/pandit_register`, user);
  }

  public getPanditCat() {
    return this.http.get(this.apiURL + `/pandit_cat`);
  }

  public addToCart(user_id, product_id) {
    //backend api call // parameters are passed after comma (if more than one param then send as object like below)
    return this.http.post(this.apiURL + `/add_to_cart`, { user_id: user_id, product_id: product_id });
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

  get_products_from_cart(user_id): Promise<any> {
    return this.http
      .post(this.apiURL + "/show_cart", {
        user_id: user_id
      })
      .toPromise()
      .catch(this.handleError);
  }

  public getMoonSignData(sign, date) {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', `*`);
    if (sign < 10) {
      sign = '0' + sign;
    }
    return this.http.get(`https://service.divyapuja.com:3000/get_moonsign?reqData={"date":"` + date + `","moonsign":"` + sign + `","lan":"HIN","scope":"D"}`);
  }
  getDesiredPuja(tirth) {
    return this.http.get('assets/json/' + tirth + '_package.json');
  }
  addPackages(details) {
    this.selectedPackages.next(details);
  }
  getPackages() {
    return this.selectedPackages.asObservable();
  }
}