import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkout_user } from '../model/checkout-user';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkOutData: checkout_user = new checkout_user;
  checkOutForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.checkOutForm = this.fb.group({

      user_id: [''],
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
  }

  ngOnInit(): void {
  }
placeOrder(){
  alert('order placed');
}
}
