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
  tempUser_id = '12';
  constructor(
    private productService: ProductService,
    private alertService: AlertService,
    private behavioralSubjectService: BehavioralSubjectService) { }

  ngOnInit(): void {
    this.cartDetails(this.tempUser_id);
  }

  cartDetails(user_id) {
    const userId = { user_id: this.tempUser_id }
    this.productService.getCartDetails(userId).subscribe((data) => {
      this.cartList = data["data"];
      console.log(data);
    });
  }
  removeProduct(product, index) {
    const prodToRemove = { id: product.id };
    this.productService.removeProduct(prodToRemove).subscribe((data) => {
      this.behavioralSubjectService.isEvent.next('addCart');
      console.log(data);

    });
  }
}
