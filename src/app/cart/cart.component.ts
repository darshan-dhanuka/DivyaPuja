import { Component, OnInit } from '@angular/core';
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

  constructor(
    private productService: ProductService,
    private alertService: AlertService,
    private behavioralSubjectService: BehavioralSubjectService) { }

  ngOnInit(): void {
    // this.behavioralSubjectService.isClickEvent.subscribe(res => {
    //   if (res === 'addCart') {
        this.cartDetails('11');
    //     this.behavioralSubjectService.isEvent.next('');
    //   }
    // });

  }
  cartDetails(user_id) {
    const userId = { user_id: '11' }
    this.productService.getCartDetails(userId).subscribe((data) => {
      // this.behavioralSubjectService.isEvent.next('addCart');
      this.cartList = data["data"];
      console.log(data);
    });
  }
  removeProduct(product, index) {
    const prodToRemove = { product_id: product.product_id, user_id: product.user_id };
    this.productService.removeProduct(prodToRemove).subscribe((data) => {
      // this.cartList.splice(index, 1);
      this.behavioralSubjectService.isEvent.next('addCart');
      console.log(data);

    });
  }
}
