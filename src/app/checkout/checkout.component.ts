import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { checkout_user } from '../model/checkout-user';
import { ProductService } from '../service/product.service';
declare var Razorpay :any;
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
  options = {
    "key": "rzp_test_cIgUR9aUMYeT3u", // Enter the Key ID generated from the Dashboard
    "amount": 0, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "DivyaPuja",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response){
        console.log('razor Server',response);
    },
    "prefill": {
        "name": "",
        "email": "",
        "contact": ""
    }
};
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
      const rzrAmount=resp['data'].amount*100;
      this.options.amount=rzrAmount;
      this.options.order_id=resp['data'].id;
      this.options.prefill= {
        "name": details.name +' '+details.last_name,
        "email": details.email,
        "contact": details.mobile_num
    };
      this.options.handler=this.razorPayResponseHandler;
      var rzp1=new Razorpay(this.options);
      rzp1.open();
      console.log('opened');
    });
  }
  razorPayResponseHandler(response){
    console.log(response);
    const payDetails={
      "payment_id": response.razorpay_payment_id,
      "order_id": response.razorpay_order_id,
      "signature": response.razorpay_signature,
      "status": 1
  };
    this.productService.addPaymentToServer(payDetails).subscribe(resp=>{
      console.log('from Server',resp);
    })
  }
}
