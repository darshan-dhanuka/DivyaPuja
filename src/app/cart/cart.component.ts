import { Component, OnInit } from '@angular/core';
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
  grandTotal=0;
  tempUser_id = '11';
  constructor(
    private productService: ProductService,
    private alertService: AlertService,
    private toastr: ToastrService,
    private behavioralSubjectService: BehavioralSubjectService) { }

  ngOnInit(): void {
    this.cartDetails(this.tempUser_id);
  }

  cartDetails(user_id) {
    const userId = { user_id: this.tempUser_id }
    this.productService.getCartDetails(userId).subscribe((data) => {
      this.cartList = data['data']['cart_items'];  
      this.cartList.filter(item=>{
        item['item_Total']=item.qty*parseFloat(item.product_price);
        this.grandTotal=this.grandTotal+parseFloat(item['item_Total']);
      })    
      console.log(data);
    });
  }
  removeProduct(product, index) {
    const prodToRemove = { id: product.id };
    this.productService.removeCartItem(prodToRemove).subscribe((data) => {
      this.behavioralSubjectService.isEvent.next('addCart');
      this.toastr.success('Product removed successfully!');
      console.log(data);

    });
  }
}
