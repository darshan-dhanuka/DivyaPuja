import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkout_user } from '../model/checkout-user';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkOutData: checkout_user = new checkout_user;
  checkOutForm: FormGroup;
  loading=true;
  cartList;
  constructor(private fb: FormBuilder,private productService:ProductService) {
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
    this.loading=false;
    this.cartList=JSON.parse(localStorage.getItem('cartItems'));
  }

  ngOnInit(): void {
  }

  placeOrder() {
    const details=this.checkOutForm.value;
    const cartDetails=this.cartList.cartItems.map(item=>{return {product_id:item.product_id,qty:item.qty,price:item.item_Total}});
    details.order_items=cartDetails;
    details.grand_total=this.cartList.grandTotal;
    this.productService.checkoutDetails(details).subscribe(resp=>{
      console.log(resp);
    });
  }
}
