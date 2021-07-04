import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pandit } from '../model/pandit-user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = "https://service.divyapuja.com:3000/api/v1";


  constructor(private http: HttpClient) {}

  getProductDetails() {
    return this.http.get(this.apiURL + "/products", {})
  }
  addCartDetails(productDetail) {
    return this.http.post(this.apiURL + "/cart-items", productDetail);
  }
  getCartDetails(userId) {
    return this.http.get(this.apiURL + "/cart-items", {params:userId});
  }
  removeProduct(product) {
    return this.http.delete(this.apiURL + "/cart-items", product);
  }
}
