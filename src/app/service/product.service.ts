import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pandit } from '../model/pandit-user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = "https://service.divyapuja.com:3000";


  constructor(private http: HttpClient) {}

  getProductDetails() {
    return this.http.post(this.apiURL + "/get_products", {})
  }
  addCartDetails(productDetail) {
    return this.http.post(this.apiURL + "/add_to_cart", productDetail);
  }
  getCartDetails(userId) {
    return this.http.post(this.apiURL + "/show_cart", userId);
  }
  removeProduct(product) {
    return this.http.post(this.apiURL + "/remove_from_cart", product);
  }
}
