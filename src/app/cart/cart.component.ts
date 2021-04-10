import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cartDetails(1);
  }
  cartDetails(user_id) {
    const userId = { user_id: "1" }
    this.productService.getCartDetails(userId).subscribe((data) => {
      this.cartList =data["data"];
      console.log(data);
    });
  }
  removeProduct(productId){
    const product = {product_id : productId,user_id:"1"};
    this.productService.removeProduct(product).subscribe((data) => {
      
      console.log(data);

    });
  }
}
