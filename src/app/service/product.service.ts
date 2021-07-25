import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pandit } from '../model/pandit-user';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL = "https://service.divyapuja.com:3000/api/v1";


  constructor(private http: HttpClient) {}

  getProductList() {
    return this.http.get(this.apiURL + "/products", {})
  }
  getProductDetails(productId) {
    return this.http.get(this.apiURL + "/products", {params:productId})
  }
  addCartDetails(productDetail) {
    return this.http.post(this.apiURL + "/cart-items", productDetail);
  }
  getCartDetails(userId) {
    return this.http.get(this.apiURL + "/cart-items", {params:userId});
  }
  removeCartItem(removedItem) {
    return this.http.delete(this.apiURL + "/cart-items", {params:removedItem});
  }
  placeOrderDetails(details){
    return this.http.post(this.apiURL+"/orders",details);
  }
  addPaymentToServer(razor_reponse){
    const responseDetails={
      "payment_id": razor_reponse.razorpay_payment_id,
      "order_id": razor_reponse.razorpay_order_id,
      "signature": razor_reponse.razorpay_signature,
      "status": 1
    }
    return this.http.put(this.apiURL + '/orders', {payment_details:responseDetails});
  }
}
