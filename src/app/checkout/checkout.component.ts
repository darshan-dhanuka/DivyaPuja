import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { checkout_user, razor_options } from '../model/checkout-user';
import { ProductService } from '../service/product.service';
declare var Razorpay: any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkOutData: checkout_user = new checkout_user;
  checkOutForm: FormGroup;
  loading = true;
  cartList;
  pay_options: razor_options = new razor_options;
  constructor(private fb: FormBuilder, private productService: ProductService, private toastr: ToastrService) {
    this.checkOutForm = this.fb.group({
      user_id: ['11'],
      grand_total: [''],
      order_items: [''],
      name: [''],
      last_name: [''],
      email: [''],
      mobile_num: [''],
      user_street: [''],
      user_appartment: [''],
      user_city: [''],
      user_state: [''],
      user_postcode: [''],
      user_country: [''],
      company: [''],
      order_note: [''],
      user_address_id: [''],
      delivery_date: [''],
    });
    this.loading = false;
    this.cartList = JSON.parse(localStorage.getItem('cartItems'));
  }

  ngOnInit(): void {

  }

  placeOrder() {
    const details = this.checkOutForm.value;
    const cartDetails = this.cartList.cartItems.map(item => { return { product_id: item.product_id, qty: item.qty, price: item.item_Total } });
    details.order_items = cartDetails;
    details.grand_total = this.cartList.grandTotal;
    this.productService.placeOrderDetails(details).subscribe(resp => {
      if (resp && resp['data'] instanceof Object) {
        const rzrAmount = resp['data'].amount * 100;
        this.pay_options.amount = rzrAmount;
        this.pay_options.order_id = resp['data'].id;
        this.pay_options.prefill = {
          "name": details.name + ' ' + details.last_name,
          "email": details.email,
          "contact": details.mobile_num
        };
        this.razorPayment(this.pay_options);
      } else {
        this.toastr.error(resp['message']);
      }
    });
  }
  razorPayment(options): any {
    
    var rzpay = new Razorpay(options);
    rzpay.on('payment.failed', function (response) {
      this.toastr.error(response.error.description);
    });
    options.handler = this.razorPayResponseHandler;
    rzpay.open();
  }
  razorPayResponseHandler(response) {
    var event = new CustomEvent("payment.success",
      {
        detail: response,
        bubbles: true,
        cancelable: true
      }
    );
    window.dispatchEvent(event);
  }
  @HostListener('window:payment.success', ['$event'])
  paymentStatus(event) {
    this.productService.addPaymentToServer(event.detail).subscribe(resp => {
      this.toastr.success(resp['message']);
    });
  }
}
