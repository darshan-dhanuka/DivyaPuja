import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../service/alert.service';
import { BehavioralSubjectService } from '../service/behavioral-subject.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: any;
  grandTotal = 0;
  tempUser_id = '11';
  quantity="";
  totalPrice = 0;
  constructor(
    private productService: ProductService,
    private alertService: AlertService,
    private toastr: ToastrService,
    private behavioralSubjectService: BehavioralSubjectService, private router: Router) { }

  ngOnInit(): void {
    this.cartDetails(this.tempUser_id);
  }

  cartDetails(user_id) {
    const userId = { user_id: this.tempUser_id }
    this.productService.getCartDetails(userId).subscribe((data) => {
      this.cartList = data['data']['cart_items'];
      this.calculateTotal();
      console.log(data);
    });
  }

  calculateTotal() {
    this.grandTotal = 0;
    this.cartList.filter(item => {
      item['item_Total'] = parseInt(item.qty) * parseFloat(item.product_price);
      this.grandTotal = this.grandTotal + parseFloat(item['item_Total']);
    })
  }
  plusQty(item){
    item.qty=parseInt(item.qty)+1;
    this.priceTotalFun(item,item.qty);
  }
  minusQty(item){
    if(item.qty>1){
    item.qty=parseInt(item.qty)-1;
    this.priceTotalFun(item,item.qty);
    }
  }
  priceTotalFun(item, event) {
    let qty = event;
    item.qty = qty && qty != "" ? parseInt(qty) : 0;
    item['item_Total'] = item.qty * parseFloat(item.product_price);
    this.calculateTotal();
  }

  removeProduct(product, index) {
    const prodToRemove = { id: product.id };
    this.productService.removeCartItem(prodToRemove).subscribe((data) => {
      this.cartDetails(this.tempUser_id);
      this.behavioralSubjectService.isEvent.next('addCart');
      this.toastr.success('Product removed successfully!');
      console.log(data);
    });
  }

  placeOrder() {
    localStorage.setItem('cartItems', JSON.stringify({ cartItems: this.cartList, grandTotal: this.grandTotal }));
    this.router.navigate(['/checkout']);
  }
}
